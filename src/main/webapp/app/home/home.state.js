(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

        function stateConfig($stateProvider) {
            $stateProvider.state('home', {
                parent: 'app',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    },
                    'footer@': {
                        templateUrl: 'app/home/footer.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        return $translate.refresh();
                    }]
                }
            });

        $stateProvider.state('contact', {
            parent: 'app',
            url: '/contact',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/home/contact.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('home');
                    return $translate.refresh();
                }]
            }
        });

            $stateProvider.state('impressum', {
                parent: 'app',
                url: '/impressum',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/home/impressum.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    },
                    'footer@': {
                        templateUrl: 'app/home/footer.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        return $translate.refresh();
                    }]
                }
            });
      }
})();
