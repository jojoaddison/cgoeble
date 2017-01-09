(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('BuonjiornoController', BuonjiornoController);

    BuonjiornoController.$inject = ['$rootScope','$scope', 'Principal', 'LoginService', '$state', 'UserRepo','$window'];

    function BuonjiornoController ($rootScope, $scope, Principal, LoginService, $state, UserRepo, $window) {
        var vm = this;
        var videoBox = angular.element("#video-box");
        var conceptBox = angular.element("#conceptBox");
        var conceptView = angular.element("#conceptView");
        vm.conceptShowing = false;

        vm.loop = loop;
        vm.play = play;
        vm.pause = pause;
        vm.select = select;
        vm.toggleShowConcept = toggleShowConcept;

        function toggleShowConcept(){
            vm.conceptShowing = !vm.conceptShowing;
        }

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

    }
})();
