/**
 * Created by aless on 08/07/2017.
 */
(function () {
    'use strict';

    angular
        .module('hotelEasy')
        .controller('prenotazioniController', prenotazioniController);
    prenotazioniController.$inject = ['$state', '$filter', '$stateParams', '$scope', '$mdDialog'];

    function prenotazioniController($state, $filter, $stateParams, $scope, $mdDialog) {
        $scope.formSubmit = false;

        $scope.prenotazione = {
            numCamere: null,
            numAdulti: null,
            numBambini: null,
            nome: null,
            cognome: null,
            startDate: null,
            endDate: null
        };

        $scope.lstPrenotazioni = [
            {
                numCamere: 1,
                numAdulti: 2,
                numBambini: 1,
                nome: 'Mario',
                cognome: 'Rossi',
                startDate: new Date(2017, 7, 15, 0, 0, 0, 0),
                endDate: new Date(2017, 7, 29, 0, 0, 0, 0),
            },
            {
                numCamere: 1,
                numAdulti: 2,
                numBambini: 2,
                nome: 'Giovanni',
                cognome: 'Verdi',
                startDate: new Date(2017, 7, 22, 0, 0, 0, 0),
                endDate: new Date(2017, 8, 5, 0, 0, 0, 0),
            },
            {
                numCamere: 1,
                numAdulti: 2,
                numBambini: 2,
                nome: 'Luca',
                cognome: 'Bianchi',
                startDate: new Date(2017, 7, 15, 0, 0, 0, 0),
                endDate: new Date(2017, 8, 5, 0, 0, 0, 0),
            }
        ];

        $scope.roomNumeroCamere = ('1 2 3 4 5').split(' ').map(function (numbOcc) {
            var nu = numbOcc;
            return {nu: numbOcc};
        });

        $scope.roomNumberOccupant = ('1 2 3 4 5').split(' ').map(function (numbOcc) {
            var nu = numbOcc;
            return {nu: numbOcc};
        });

        $scope.roomNumeroBambini = ('0 1 2 3 4 5').split(' ').map(function (numbOcc) {
            var nu = numbOcc;
            return {nu: numbOcc};
        });

        $scope.showConfirm = function (ev) {
            if ($scope.prenotazione.numCamere >= 1 && $scope.prenotazione.numAdulti >= 1 && $scope.prenotazione.cognome != null
                && $scope.prenotazione.numAdulti != null && $scope.prenotazione.startDate != null && $scope.prenotazione.endDate != null) {
                var confirm = $mdDialog.confirm()
                    .title('Confermare la prenotazione?')
                    .textContent('Prenotazione per ' + $scope.prenotazione.numCamere + ' dal ' + $scope.prenotazione.startDate + ' al ' + $scope.prenotazione.endDate)
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Si')
                    .cancel('Annulla');

                $mdDialog.show(confirm).then(function () {
                    $scope.lstPrenotazioni.push($scope.prenotazione);
                    $scope.prenotazione=null;

                }, function () {
                    $scope.status = 'You decided to keep your debt.';
                });
            }
            else {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Attenzione')
                        .textContent('La richiesta di prenotazione non è completa')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Ok')
                        .targetEvent(ev)
                );
            }
        };


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