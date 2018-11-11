var mainApp = angular.module("mainApp", ['ngRoute', 'ngMap']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'IndexController'
		})
		.when('/form', {
			templateUrl: 'views/mosquito_form.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/'
		});

});
