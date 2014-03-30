/* globals worksheet */

worksheet.config(function routes($routeProvider) {
	$routeProvider
		.when('/property-schedule',
			{
				controller: 'PropertyScheduleController',
				templateUrl: '/js/views/worksheet.html'
			}
		)
		.when('/auto-vehicle-schedule',
			{
				controller: 'AutoScheduleController',
				templateUrl: '/js/views/worksheet.html'
			}
		)
		.when('/aircraft-schedule',
			{
				controller: 'AircraftScheduleController',
				templateUrl: '/js/views/worksheet.html'
			}
		)
		.when('/work-comp',
			{
				controller: 'WorkCompController',
				templateUrl: '/js/views/worksheet.html'
			}
		)
		.when('/environmental-storage-tanks',
			{
				controller: 'EnvironmentalStorageTanksController',
				templateUrl: '/js/views/worksheet.html'
			}
		)
		.otherwise({redirectTo: '/property-schedule'});
});