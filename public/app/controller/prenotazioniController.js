/**
 * Created by aless on 08/07/2017.
 */
(function () {
    'use strict';

    angular
        .module('hotelEasy')
        .controller('prenotazioniController', prenotazioniController);
    prenotazioniController.$inject = ['$state', '$filter', '$stateParams', '$scope'];

    function prenotazioniController($state, $filter, $stateParams, $scope) {
        $scope.formSubmit = false;

        $scope.prenotazione={
            numCamere:null,
            numAdulti:null,
            numBambini:null,
            nome:null,
            cognome:null,
            startDate:null ,
            endDate:null
        }

        $scope.roomNumeroCamere = ('1 2 3 4 5').split(' ').map(function(numbOcc) {
            var nu=numbOcc;
            return {nu: numbOcc};
        });

        $scope.roomNumberOccupant = ('1 2 3 4 5').split(' ').map(function(numbOcc) {
            var nu=numbOcc;
            return {nu: numbOcc};
        });

        $scope.roomNumeroBambini = ('0 1 2 3 4 5').split(' ').map(function(numbOcc) {
            var nu=numbOcc;
            return {nu: numbOcc};
        });

       /* $scope.showSimpleToast = function() {
            var pinTo = $scope.getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Simple Toast!')
                    .position(pinTo )
                    .hideDelay(3000)
            );
        };*/




    }
})();