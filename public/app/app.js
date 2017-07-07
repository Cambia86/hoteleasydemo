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

    }
})();

