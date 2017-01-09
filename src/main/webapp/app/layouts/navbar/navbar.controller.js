(function() {
    'use strict';

    angular
        .module('cgserverApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', 'UserRepo', '$window'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService, UserRepo, $window) {
        var vm = this;

        vm.menuItemsState=false;
        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = false;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;
        vm.showMenuItems = showMenuItems;
        vm.hideMenuItems = hideMenuItems;
        vm.getMenuItemsState = getMenuItemsState;
        vm.authenticated = authenticated;

        authenticated();

        function authenticated(){
            var account = UserRepo.getAccount();
            if(account != null){
                vm.isAuthenticated = true;
                vm.account = account;
            }
        }

        function getMenuItemsState(){
          return vm.menuItemsState;
        }

        function showMenuItems(){
          vm.menuItemsState = !vm.menuItemsState;
        }

        function hideMenuItems(){
          vm.menuItemsState = false;
        }

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            hideMenuItems();
            collapseNavbar();
            Auth.logout();
            $state.go('home');
            $window.location.reload();
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }

    }
})();
