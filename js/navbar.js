/**
 * Created by TaberStorm on 7/17/2015.
 */
app.controller('navController', ['$scope', '$location', function ($scope, $location) {
    $scope.navItems = [
        {path: '/', name: 'About'},
        {path: '/projects', name: 'Projects'},
        {path: '/crypTrd', name: 'CryptsyTrader'},
        {path: '/tabersRolePlay', name: 'TRP'},
        {path: '/gameMaster', name: 'Gm Tools'},
        {path: '/calendar', name: 'Schedule'},
        {path: '/angularTest', name: 'Angular'},
        {path: '/resume', name: 'Resume'}
    ];
    $scope.isActive = function (item) {
        if (item.path == $location.path()) {
            return true;
        }
        return false;
    };
}]);