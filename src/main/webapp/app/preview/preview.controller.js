(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('PreviewController', PreviewController);

    PreviewController.$inject = ['$scope', '$state'];

    function PreviewController ($scope, $state) {
        var vm = this;
        var videoBox = angular.element("#video-box");

        vm.loop = loop;
        vm.play = play;
        vm.pause = pause;

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
