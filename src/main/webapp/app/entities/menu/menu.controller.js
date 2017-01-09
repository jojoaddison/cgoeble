(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$state', 'Menu'];

    function MenuController ($scope, $state, Menu) {
        var vm = this;

        vm.menus = [];

        loadAll();

        function loadAll() {
            Menu.query(function(result) {
                vm.menus = result;
                vm.searchQuery = null;
            });
        }
    }
})();
