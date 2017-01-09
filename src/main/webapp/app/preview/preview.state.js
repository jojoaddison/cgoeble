(function() {
  'use strict';

  angular
  .module('cgserverApp')
  .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {

    $stateProvider.state('preview', {
      parent: 'app',
      url: '/preview',
      data: {
        authorities: []
      },
      views: {
        'content@': {
          templateUrl: 'app/preview/indext.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        },
        'footer@': {
          templateUrl: 'app/home/footer.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

    $stateProvider.state('design', {
      parent: 'app',
      url: '/preview/design',
      data: {
        authorities: []
      },
      views: {
        'content@': {
          templateUrl: 'app/preview/design.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        },
        'footer@': {
          templateUrl: 'app/home/footer.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });


    $stateProvider.state('project', {
      parent: 'app',
      url: '/preview/project',
      data: {
        authorities: []
      },
      views: {
        'content@': {
          templateUrl: 'app/preview/project.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        },
        'footer@': {
          templateUrl: 'app/home/footer.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });


    $stateProvider.state('about', {
      parent: 'app',
      url: '/preview/about',
      data: {
        authorities: []
      },
      views: {
        'content@': {
          templateUrl: 'app/preview/about.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        },
        'footer@': {
          templateUrl: 'app/home/footer.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

    $stateProvider.state('work', {
      parent: 'app',
      url: '/preview/work',
      data: {
        authorities: []
      },
      views: {
        'content@': {
          templateUrl: 'app/preview/work.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        },
        'footer@': {
          templateUrl: 'app/home/footer.html',
          controller: 'PreviewController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

  }
})();
