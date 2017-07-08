(function () {
    'use strict';

    angular
        .module('hotelEasy')
        .controller('homeController', homeController);
    homeController.$inject = ['$state', '$filter', '$stateParams', '$scope'];

    function homeController($state, $filter, $stateParams, $scope) {
        $scope.formSubmit = false;
    }
})();