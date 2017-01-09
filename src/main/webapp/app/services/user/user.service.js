(function () {
    'use strict';

    angular
        .module('cgserverApp')
        .factory('User', User)
        .factory('UserRepo', UserRepo);

    User.$inject = ['$resource'];

    function User ($resource) {
        var service = $resource('api/users/:login', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });

        return service;
    }

    UserRepo.$inject = ['$sessionStorage'];

    function UserRepo($sessionStorage){
        return {
          saveAccount: function(account) {
                $sessionStorage.account=JSON.stringify(account);
          },
          getAccount: function(){
                var account = $sessionStorage.account;
                return account != null? JSON.parse(account) : null;
          },
          removeAccount: function(){
              delete $sessionStorage.account;
          }
        }
    }

})();
