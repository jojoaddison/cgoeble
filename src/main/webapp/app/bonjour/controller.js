(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('BonjourController', BonjourController);

    BonjourController.$inject = ['$scope'];

    function BonjourController ($scope) {
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

    }
})();
