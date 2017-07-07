/**
 * Created by aless on 06/07/2017.
 */
(function () {
    'use strict';

    angular
        .module('hotelEasy')
        .directive('sidebarbutton', sidebarbutton);

    sidebarbutton.$inject = ['appVersion'];
    function sidebarbutton(appVersion) {
        return {
            restrict: 'E',
            scope: {
                quest: '=quest'
            },
            templateUrl: 'app/views/directive/sidebarButton.html?v=' + appVersion
        };
    }
})();