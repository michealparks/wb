var factories, wbAppModule, wbHomeModule, wbLoginModule, wbMetaModule;

factories = angular.module('factories', []);

wbMetaModule = angular.module('meta', ['factories', 'ngAnimate']);

wbLoginModule = angular.module('login', ['factories', 'ngAnimate']);

wbHomeModule = angular.module('home', ['factories', 'ngAnimate']);

wbAppModule = angular.module('wurdbarf', ['meta', 'login', 'home']);

factories.factory('UserData', function() {
  return {
    name: "Micheal",
    id: ""
  };
});

factories.factory('MetaData', function() {
  return true;
});

factories.factory('AppData', function() {
  return {
    descripts: ['The worst social network in the world.', 'The first devoted NSA data-mining resource.', 'A social network for sadomasochists.', 'Leave useful discourse at the door.', 'Disgorge in many flavors.'],
    view: 'login-template'
  };
});

wbMetaModule.controller('metaCtrl', ['$scope', '$timeout', 'MetaData', function($scope, $timeout, MetaData) {}]);

wbLoginModule.controller('loginCtrl', [
  '$scope', '$timeout', 'AppData', function($scope, $timeout, AppData) {
    $scope.descript = AppData.descripts[Math.floor(Math.random() * 5)];
    $scope.aboutView = false;
    $scope.toggleAbout = function(bool) {
      return $scope.aboutView = bool;
    };
    $scope.toggleRegister = function(bool) {
      return $scope.regView = bool;
    };
    return $scope.login = function() {
      return AppData.view = 'home-template';
    };
  }
]);

wbHomeModule.controller('homeCtrl', ['$scope', '$timeout', function($scope, $timeout, AppData) {}]);

wbAppModule.controller('appCtrl', [
  '$scope', '$timeout', 'AppData', function($scope, $timeout, AppData) {
    return $scope.view = AppData.view;
  }
]);

(function() {
  return true;
})();
