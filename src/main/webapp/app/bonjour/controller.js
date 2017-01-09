(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('BonjourController', BonjourController);

    BonjourController.$inject = ['$rootScope','$scope', 'Principal', 'LoginService', '$state', 'UserRepo','$window'];

    function BonjourController ($rootScope, $scope, Principal, LoginService, $state, UserRepo, $window) {
        var vm = this;
        var videoBox = angular.element("#video-box");

        vm.loop = loop;
        vm.play = play;
        vm.pause = pause;
        vm.select = select;

        function select(path){
            videoBox[0].src = path;
            play();
        }

        function loop(){
            videoBox.loop = !videoBox.loop;
        }
        function pause(){
            videoBox[0].pause();
        }
        function play(){
            videoBox[0].play();
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
})();
