(function() {
  'use strict';

  angular
  .module('cgserverApp')
  .controller('HomeController', HomeController)
  .controller('CGLoginController', CGLoginController);

    CGLoginController.$inject = ['$rootScope','$scope', 'Principal', '$state', 'UserRepo','$window','$timeout'];

  HomeController.$inject = ['$rootScope','$scope', 'Principal', 'LoginService', '$state', 'UserRepo'];

  function CGLoginController ($rootScope, $scope, Principal, $state, UserRepo, $window, $timeout) {
    var vm = this;
      vm.openSesame = openSesame;
      vm.password = null;
      vm.isAuthenticated = false;

      authenticated();

      function authenticated(){
          var account = UserRepo.getAccount();
          if(account != null){
              vm.isAuthenticated = true;
              vm.account = account;
          }
      }


      function openSesame(){
          if(vm.password != null){
              if(vm.password == 'bonjour'){
                  var account = {
                      "activated": true,
                      "email": "bonjour@cgoebl.at",
                      "fistName": "Bonjour",
                      "lastName": "Goebl",
                      "login": "bonjour",
                      "langKey": "de",
                      "authorities": ["ROLE_BONJOUR"]
                  };
                  vm.account = account;
                  vm.isAuthenticated = true;
                  UserRepo.saveAccount(account);
                  Principal.authenticate(account);
                  $rootScope.$broadcast('authenticationSuccess');
                  $timeout(function(){
                      $state.go('bonjour');
                  }, 500);
              }
              if(vm.password == 'buonjiorno'){
                  var account = {
                      "activated": true,
                      "email": "buonjiorno@cgoebl.at",
                      "fistName": "Buonjiorno",
                      "lastName": "Goebl",
                      "login": "buonjiorno",
                      "langKey": "de",
                      "authorities": ["ROLE_BUONJIORNO"]
                  };
                  vm.account = account;
                  vm.isAuthenticated = true;
                  UserRepo.saveAccount(account);
                  Principal.authenticate(account);
                  $rootScope.$broadcast('authenticationSuccess');
                  $timeout(function(){
                      $state.go('buonjiorno');
                  }, 500);
              }
          }
      }
  }

  function HomeController ($rootScope, $scope, Principal, LoginService, $state, UserRepo) {
    var vm = this;

    vm.account = null;
    vm.isAuthenticated = null;
    vm.login = LoginService.open;
    vm.register = register;
    vm.isAuthenticated = false;

      authenticated();

      function authenticated(){
          var account = UserRepo.getAccount();
          if(account != null){
              vm.isAuthenticated = true;
              vm.account = account;
          }
      }

    $scope.$on('authenticationSuccess', function() {
        authenticated();
    });

      /**
    getAccount();

    function getAccount() {
      Principal.identity().then(function(account) {
        console.log(account);
        vm.account = account;
        vm.isAuthenticated = Principal.isAuthenticated;
      });
    }
    **/

    function register () {
      $state.go('register');
    }

  }


})();
