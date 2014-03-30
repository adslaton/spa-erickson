/*globals angular*/

var worksheet = angular.module('worksheet', 
	[
		'ngRoute'
	]),
	controllers = {};
	
controllers = {
	PropertyScheduleController: function ($scope) {
		$scope.title = 'Erickson Air Crane - Property Schedule';
		$scope.categories = [
			{
				name: 'Location Information',
				fields: [
					'Location #',
					'Buidling #',
					'Street Address',
					'City',
					'State',
					'Country',
					'Zip Code',
					'Owned/Leased',
					'If leased, lease termination date'
				]
			},
			{
				name: 'Use and Construction',
				fields: [
					'Occupancy',
					'Wall Construction',
					'Roof Construction',
					'Intermediate Floor Construction',
					'Year Built',
					'Sq. Ft.',
					'Fire Protection (i.e. Smoke Detectors; Automatic Sprinklers)'
				]
			},
			{
				name: 'Values (at Replacement Cost New)',
				fields: [
					'Building',
					'Raw Materials/Stock & Supplies',
					'Finished Iventory',
					'Business Interruption',
					'TOTAL'
				]
			},
			{
				name: 'Natural Catastrophy Exposures',
				fields: [
					'Flood',
					'Tropical Storm',
					'Earthquake'
				]
			}
		];
	},
	AutoScheduleController: function ($scope) {
		$scope.title = 'Erickson Air Crane - Auto.Vehicle Schedule';
		$scope.categories = [
			{
				name: 'Auto',
				fields: [
					'Assigned #',
					'Make',
					'Model',
					'Year',
					'VIN#',
					'License Plate #',
					'Where Licenses',
					'Where Garaged',
					'Value'
				]
			}
		]
	},
	AircraftScheduleController: function ($scope) {
		$scope.title = 'Erickson Air Crane - Aircraft Schedule';
		$scope.categories = [
			{
				name: 'Aircraft',
				fields: [
					'Item No.',
					'Year',
					'Aircraft',
					'Owned/Leased',
					'Lessor if Leased',
					'Reg. No.',
					'MSN',
					'Seating',
					'Insured Value',
					'Stats - Operational or Grounded'
				]
			}
		]
	},
	WorkCompController: function ($scope) {
		$scope.title = 'Erickson Air Crane - Work Comp';
		$scope.categories = [
			{
				name: 'Location Information',
				fields: [
					'Location #',
					'Street Address',
					'City',
					'State',
					'Country',
					'Zip Code'
				]
			},
			{
				name: 'Payroll Information',
				fields: [
					'Admin Staff - 8810',
					'Sales Staff - 8742',
					'Rotor Pilot - 7425',
					'Fixed Wing Pilot - 7431',
					'Ground Crew - 7403',
					'MRO - 3820',
					'Total # of Employees'
				]
			}
		]
	},
	EnvironmentalStorageTanksController: function ($scope) {
		$scope.title = 'Erickson Air Crane - Environmental - Storage Tanks';
		$scope.categories = [
			{
				name: 'Location Information',
				fields: [
					'Location #',
					'Street Address',
					'City',
					'State',
					'Country',
					'Zip Code'
				]
			},
			{
				name: 'In Door',
				fields: [
					'Tank Construction',
					'Chemical Type'
				]
			},
			{
				name: 'Out Door - Above Ground',
				fields: [
					'Capacity',
					'Tanks Construction',
					'Chemical Type'
				]
			},
			{
				name: 'Out Door - Underground',
				fields: [
					'Capacity',
					'Tank Construction',
					'Chemical Type'
				]
			}
		]
	}
};

worksheet.controller(controllers);