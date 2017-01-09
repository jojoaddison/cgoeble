(function() {
  'use strict';

  angular
  .module('cgserverApp')
  .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {

    $stateProvider.state('buonjiorno', {
      parent: 'app',
      url: '/buonjiorno',
      data: {
        authorities: ['ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/buonjiorno/index.html',
          controller: 'BuonjiornoController',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

      $stateProvider.state('buonjiorno-about', {
          parent: 'app',
          url: '/buonjiorno/about',
          data: {
              authorities: ['ROLE_BUONJIORNO']
          },
          views: {
              'content@': {
                  templateUrl: 'app/buonjiorno/about.html',
                  controller: 'BuonjiornoController',
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
                  $translatePartialLoader.addPart('global');
                  return $translate.refresh();
              }]
          }
      });

      $stateProvider.state('buonjiorno-schamanismus', {
          parent: 'app',
          url: '/buonjiorno/schamanismus',
          data: {
              authorities: ['ROLE_BUONJIORNO']
          },
          views: {
              'content@': {
                  templateUrl: 'app/buonjiorno/index.html',
                  controller: 'BuonjiornoController',
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
                  $translatePartialLoader.addPart('global');
                  return $translate.refresh();
              }]
          }
      });

      $stateProvider.state('buonjiorno-login', {
          parent: 'app',
          url: '/buonjiorno/login',
          data: {
              authorities: []
          },
          views: {
              'content@': {
                  templateUrl: 'app/buonjiorno/login.html',
                  controller: 'CGLoginController',
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
                  $translatePartialLoader.addPart('global');
                  return $translate.refresh();
              }]
          }
      });
  }
})();
