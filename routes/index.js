/* globals worksheet */

worksheet.config(function routes($routeProvider) {
	$routeProvider
		.when('/property-schedule',
			{
				controller: 'PropertyScheduleController',
				templateUrl: '/views/worksheet.html'
			}
		)
		.when('/auto-vehicle-schedule',
			{
				controller: 'AutoScheduleController',
				templateUrl: '/views/worksheet.html'
			}
		)
		.when('/aircraft-schedule',
			{
				controller: 'AircraftScheduleController',
				templateUrl: '/views/worksheet.html'
			}
		)
		.when('/work-comp',
			{
				controller: 'WorkCompController',
				templateUrl: '/views/worksheet.html'
			}
		)
		.when('/environmental-storage-tanks',
			{
				controller: 'EnvironmentalStorageTanksController',
				templateUrl: '/views/worksheet.html'
			}
		)
		.otherwise({redirectTo: '/property-schedule'});
});