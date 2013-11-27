var KinveyModule, factories, wbAppModule, wbHomeModule, wbLoginModule, wbMetaModule;

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
    return $scope.toggleRegister = function(bool) {
      return $scope.regView = bool;
    };
  }
]);

wbHomeModule.controller('homeCtrl', ['$scope', '$timeout', function($scope, $timeout, AppData) {}]);

wbAppModule.controller('appCtrl', [
  '$scope', '$timeout', 'AppData', function($scope, $timeout, AppData) {
    $scope.view = AppData.view;
    return $scope.login = function() {
      return $scope.view = 'home-template';
    };
  }
]);

KinveyModule = (function() {
  var promise;
  promise = Kinvey.init({
    appKey: 'App Key',
    appSecret: 'App Secret'
  });
  promise.then(function(activeUser) {
    return console.log(activeUser);
  }, function(error) {
    return console.log(error);
  });
  promise = Kinvey.ping();
  return promise.then(function() {
    return console.log('Kinvey ping success. Kinvey service is alive, version: ', +response.version + ', response: ' + response.kinvey);
  }, function(error) {
    return console.log('Kinvey Ping Failed. Response: ' + error.description);
  });
})();
