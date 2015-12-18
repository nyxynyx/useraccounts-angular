angular.module('myApp').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true)

	$stateProvider
		.state('useraccounts', {
			url: '/useraccounts',
			templateUrl: 'client/accounts/views/useraccounts.html',
		})
})