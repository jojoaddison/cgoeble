(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('jhi-health', {
            parent: 'admin',
            url: '/health',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'health.title'
            },
            views: {
                'navbar@': {
                    templateUrl: 'app/admin/dashboard/header.html',
                    controller: 'DashboardHeaderController',
                    controllerAs: 'vm'
                },
                'content@': {
                    templateUrl: 'app/admin/health/health.html',
                    controller: 'JhiHealthCheckController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('health');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
