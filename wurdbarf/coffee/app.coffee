factories = angular.module 'factories', []

wbMetaModule  = angular.module 'meta',  ['factories', 'ngAnimate']
wbLoginModule = angular.module 'login', ['factories', 'ngAnimate']
wbHomeModule  = angular.module 'home',  ['factories', 'ngAnimate']
wbAppModule   = angular.module 'wurdbarf', ['meta', 'login', 'home']

factories.factory 'UserData', () ->
	name : "Micheal"
	id   : ""

factories.factory 'MetaData', () -> true

factories.factory 'AppData', () ->
	descripts : [
		'The worst social network in the world.'
		'The first devoted NSA data-mining resource.'
		'A social network for sadomasochists.'
		'Leave useful discourse at the door.'
		'Disgorge in many flavors.'
	]
	view : 'login-template'

wbMetaModule.controller 'metaCtrl', [
	'$scope', '$timeout', 'MetaData', ($scope, $timeout, MetaData) ->

]

wbLoginModule.controller 'loginCtrl', [
	'$scope', '$timeout', 'AppData', ($scope, $timeout, AppData) ->

		$scope.descript  = AppData.descripts[Math.floor Math.random()*5]
		$scope.aboutView = false

		$scope.toggleAbout    = (bool) -> $scope.aboutView = bool
		$scope.toggleRegister = (bool) -> $scope.regView   = bool

		$scope.login = () -> AppData.view = 'home-template'

]

wbHomeModule.controller 'homeCtrl', [
	'$scope', '$timeout', ($scope, $timeout, AppData) ->
]

wbAppModule.controller 'appCtrl', [
	'$scope', '$timeout', 'AppData', ($scope, $timeout, AppData) ->
		$scope.view = AppData.view
]

do () -> true