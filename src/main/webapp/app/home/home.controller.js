(function() {
  'use strict';

  angular
  .module('cgserverApp')
  .controller('HomeController', HomeController)
  .controller('CGLoginController', CGLoginController);

    CGLoginController.$inject = ['$rootScope','$scope', 'Principal', '$state', 'UserRepo','$window','$timeout'];

  HomeController.$inject = ['$rootScope','$scope', 'Principal', 'LoginService', '$state'];

  function CGLoginController ($rootScope, $scope, Principal, $state, UserRepo, $window, $timeout) {
    var vm = this;
      vm.openSesame = openSesame;
      vm.password = null;

      $timeout(function(){
          if(Principal.isAuthenticated()){
              Principal.identity().then(function(account){
                  vm.account = account;
                  var authority = vm.account.authorities[0];
                  if(authority=='bonjour'){
                      $state.go('bonjour');
                  }
                  if(authority=='buonjiorno'){
                      $state.go('buonjiorno');
                  }
              });
          }
      });

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
                  $state.go('bonjour');
                  $window.location.reload();
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
                  $state.go('buonjiorno');
                  $window.location.reload();
              }
          }
      }
  }

  function HomeController ($rootScope, $scope, Principal, LoginService, $state) {
    var vm = this;

    vm.account = null;
    vm.isAuthenticated = null;
    vm.login = LoginService.open;
    vm.register = register;

    $scope.$on('authenticationSuccess', function() {
      getAccount();
    });

    getAccount();

    function getAccount() {
      Principal.identity().then(function(account) {
        //console.log(account);
        vm.account = account;
        vm.isAuthenticated = Principal.isAuthenticated;
      });
    }

    function register () {
      $state.go('register');
    }

  }


})();
