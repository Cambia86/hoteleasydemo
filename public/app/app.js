/**
 * Created by aless on 01/07/2017.
 */
(function () {
    'use strict';

    angular
        .module('hotelEasy', ['ui.router','ngMaterial']
        )
        .config(configState)
        .constant('appVersion', '1.0.0')

    configState.$inject = ['$stateProvider', '$urlRouterProvider', 'appVersion'];

    function configState($stateProvider, $urlRouterProvider, appVersion) {

        $urlRouterProvider.otherwise('/IT/home');


        $stateProvider

            .state('app', {
                abstract: true,
                url: '/{lang:(?:IT|EN)}',
                template: '<ui-view/>'
            })


            // home page
            .state('app.home', {
                url: '/home',
                views: {
                    'main@': {
                        templateUrl: 'app/views/home.html?v=' + appVersion,
                        controller: 'homeController'
                    }
                }
            })

            .state('app.prenotazioni', {
                url: '/prenotazioni',
                views: {
                    'main@': {
                        templateUrl: 'app/views/prenotazioni.html?v=' + appVersion
                    }
                }
            })

            .state('app.checkIn', {
                url: '/checkIn',
                views: {
                    'main@': {
                        templateUrl: 'app/views/checkIn.html?v=' + appVersion
                    }
                }
            })

            .state('app.checkOut', {
                url: '/checkOut',
                views: {
                    'main@': {
                        templateUrl: 'app/views/checkOut.html?v=' + appVersion
                    }
                }
            })

            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'main@': {
                        templateUrl: 'app/views/dashboard.html?v=' + appVersion
                    }
                }
            })
        ;
    }
})();

