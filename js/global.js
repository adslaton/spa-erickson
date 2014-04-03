/*global jQuery*/

(function(w, $j) {
    w.location.hash = w.location.hash || 'property';

    var view = w.location.hash.replace('#', ''),
        tabs = $('#js-tabs > li'),
        content = $j('#js-' + view + '-tab'),
        location = [
            ['', '', '', '', '', '', '', '', '']
        ],
        construction = [
            ['', '', '', '', '', '']
        ],
        replacement = [
            ['', '', '', '', '']
        ],
        catastrophy = [
            ['', '', '']
        ],
        auto = [
            ['', '', '', '', '', '', '', '', '']
        ],
        aircraft = [
            ['', '', '', '', '', '', '', '', '', '']
        ],
        workcompLocation = [
            ['', '', '', '', '', '']
        ],
        workcompPayroll = [
            ['', '', '', '', '', '', '']
        ],
        envLocation = [
            ['', '', '', '', '', '']
        ],
        envInDoor = [
            ['', '']
        ],
        envOutDoor = [
            ['', '', '']
        ],
        envOutDoorAbove = [
            ['', '', '']
        ];

    content.siblings().hide();
    content.show();

    $j(document.getElementById('location')).handsontable({
        data: location,
        minSpareRows: 1,
        colHeaders: [
            'Location #',
            'Building #',
            'Street Address',
            'City',
            'State',
            'Country',
            'Zip Code',
            'Owned/Leased',
            'If leased, lease termination date'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('construction')).handsontable({
        data: construction,
        minSpareRows: 1,
        colHeaders: [
            'Occupancy',
            'Wall Construction',
            'Roof Construction',
            'Intermediate Floor Construction',
            'Year Built',
            'Sq. Ft.',
            'Fire Protection (i.e. Smoke Detectors; Automatic Sprinklers)'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('replacement')).handsontable({
        data: replacement,
        minSpareRows: 1,
        colHeaders: [
            'Building',
            'Raw Materials/Stock & Supplies',
            'Finished Inventory',
            'Business Interruption',
            'TOTAL'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('catastrophy')).handsontable({
        data: catastrophy,
        minSpareRows: 1,
        colHeaders: [
            'Flood',
            'Tropical Storm',
            'Earthquake'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('auto')).handsontable({
        data: auto,
        minSpareRows: 1,
        colHeaders: [
            'Assigned #',
            'Make',
            'Model',
            'Year',
            'VIN#',
            'License Plate #',
            'Where Licenses',
            'Where Garaged',
            'Value'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('aircraft')).handsontable({
        data: aircraft,
        minSpareRows: 1,
        colHeaders: [
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
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('workcompLocation')).handsontable({
        data: workcompLocation,
        minSpareRows: 1,
        colHeaders: [
            'Location #',
            'Street Address',
            'City',
            'State',
            'Country',
            'Zip Code'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('workcompPayroll')).handsontable({
        data: workcompPayroll,
        minSpareRows: 1,
        colHeaders: [
            'Admin Staff - 8810',
            'Sales Staff - 8742',
            'Rotor Pilot - 7425',
            'Fixed Wing Pilot - 7431',
            'Ground Crew - 7403',
            'MRO - 3820',
            'Total # of Employees'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('envLocation')).handsontable({
        data: envLocation,
        minSpareRows: 1,
        colHeaders: [
            'Location #',
            'Street Address',
            'City',
            'State',
            'Country',
            'Zip Code'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('envInDoor')).handsontable({
        data: envInDoor,
        minSpareRows: 1,
        colHeaders: [
            'Tank Construction',
            'Chemical Type'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('envOutDoor')).handsontable({
        data: envOutDoor,
        minSpareRows: 1,
        colHeaders: [
            'Capacity',
            'Tank Construction',
            'Chemical Type'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    $j(document.getElementById('envOutDoorAbove')).handsontable({
        data: envOutDoorAbove,
        minSpareRows: 1,
        colHeaders: [
            'Capacity',
            'Tanks Construction',
            'Chemical Type'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    tabs.on('click', function() {

        var tab = $j('#js-' + this.id);

        content = $j('#' + this.id + '-tab');

        tab.siblings().removeClass('active');
        tab.addClass('active')

        content.siblings().hide();
        content.show();

    });

})(window, jQuery);