Factories = angular.module 'factories', []
Wurdbarf = angular.module 'wurdbarf', ['factories', 'ngAnimate', 'ngTouch']

factories.factory 'UserData', () ->
  name: "Micheal"
  id: 1234
  level: 3

factories.factory 'MetaData', () ->
  true

factories.factory 'AppData', () ->
  descripts: [
    'The worst social network in the world.'
    'The first devoted NSA data-mining resource.'
    'A social network for sadomasochists.'
    'Leave useful discourse at the door.'
    'Disgorge in many flavors.'
  ]
  view: 'login-template'

# Retrieves a module.
module = angular.module 'wurdbarf'
module.controller 'metaCtrl', ($scope, $timeout, MetaData) ->
  true

module.controller 'loginCtrl', ($scope, $timeout, AppData) ->
  $scope.descript = AppData.descripts[Math.floor Math.random()*5]
  $scope.aboutView = false

  $scope.toggleAbout = (bool) ->
    $scope.aboutView = bool

  $scope.toggleRegister = (bool) ->
    $scope.regView = bool

module.controller 'homeCtrl', ($scope, $timeout, AppData) ->

module.controller 'appCtrl', ($scope, $timeout, AppData) ->
  $scope.view = AppData.view
  
  $scope.login = () -> $scope.view = 'home-template'