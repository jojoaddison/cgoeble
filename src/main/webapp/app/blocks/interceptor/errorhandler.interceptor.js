(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .factory('errorHandlerInterceptor', errorHandlerInterceptor);

    errorHandlerInterceptor.$inject = ['$q', '$rootScope', '$document', '$injector'];

    function errorHandlerInterceptor ($q, $rootScope, $document, $injector) {
        var service = {
            responseError: responseError,
            getXSRF: getCSRF
        };
        var http;

        return service;

        function responseError (response) {

            console.log('response status: ' + response.status);

            if (!(response.status === 401 && (response.data === '' || (response.data.path && response.data.path.indexOf('/api/account') === 0 )))) {
                $rootScope.$emit('cgserverApp.httpError', response);
            }
            if (response.status === 403 && response.config.method !== 'GET' && getCSRF() === '') {
                // If the CSRF token expired, then try to get a new CSRF token and retry the old request
                http = $injector.get('$http');
                return http.get('/api/account').finally(function () {
                    return afterCSRFRenewed(response);
                });
            }
            return $q.reject(response);
        }


        function getCSRF() {
            var doc = $document[0];
            if (doc) {
                var name = 'XSRF-TOKEN=';
                var ca = doc.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }

                    if (c.indexOf(name) !== -1) {
                        return c.substring(name.length, c.length);
                    }
                }
            }
            return '';
        }

        function afterCSRFRenewed(oldResponse) {
            if (getCSRF() !== '') {
                // retry the old request after the new CSRF-TOKEN is obtained
                return http(oldResponse.config);
            } else {
                // unlikely to get here but reject with the old response any way and avoid infinite loop
                return $q.reject(oldResponse);
            }
        }
    }
})();
