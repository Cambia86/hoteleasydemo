/**
 * Created by aless on 08/07/2017.
 */
(function () {
    'use strict';

    angular
        .module('hotelEasy')
        .controller('sidebarButtonController', sidebarButtonController);
    sidebarButtonController.$inject = ['$state', '$filter', '$stateParams', '$scope'];

    function sidebarButtonController($state, $filter, $stateParams, $scope) {
        $scope.formSubmit = false;

        $scope.navigate= function (pageTo) {
            var _pageTo='app.'+pageTo;
            $state.go(_pageTo);
        }
    }
})();