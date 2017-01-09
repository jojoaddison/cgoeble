(function() {
  'use strict';

  angular
  .module('cgserverApp')
  .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {

    $stateProvider.state('bonjour', {
      parent: 'app',
      url: '/bonjour',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/index.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

      $stateProvider.state('bonjour-login', {
          parent: 'app',
          url: '/bonjour/login',
          data: {
              authorities: []
          },
          views: {
              'content@': {
                  templateUrl: 'app/bonjour/login.html',
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
      $stateProvider.state('bonjour-about', {
          parent: 'app',
          url: '/bonjour/about',
          data: {
              authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
          },
          views: {
              'content@': {
                  templateUrl: 'app/bonjour/about.html',
                  controller: 'BonjourController',
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

    $stateProvider.state('bonjour-graphic-design', {
      parent: 'app',
      url: '/bonjour/graphic/design',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/graphic-design.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });

    $stateProvider.state('bonjour-web-design', {
      parent: 'app',
      url: '/bonjour/web/design',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/web-design.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });


    $stateProvider.state('bonjour-styling', {
      parent: 'app',
      url: '/bonjour/styling',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/costumes.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });


    $stateProvider.state('bonjour-interior-design', {
      parent: 'app',
      url: '/bonjour/interior/design',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/interiors.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });



    $stateProvider.state('bonjour-illustration', {
      parent: 'app',
      url: '/bonjour/illustration',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/illustration.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });


    $stateProvider.state('bonjour-photography', {
      parent: 'app',
      url: '/bonjour/photography',
      data: {
        authorities: ['ROLE_BONJOUR','ROLE_BUONJIORNO']
      },
      views: {
        'content@': {
          templateUrl: 'app/bonjour/fotography.html',
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
          $translatePartialLoader.addPart('global');
          return $translate.refresh();
        }]
      }
    });
  }
})();
