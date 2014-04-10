/*global jQuery*/

(function(w, $j) {
    w.location.hash = w.location.hash || 'property';

    var view = w.location.hash.replace('#', ''),
        tabs = $('#js-tabs > li'),
        content = $j('#js-' + view + '-tab'),
        location,
        locationData = [
            ['', '', '', '', '', '', '', '', '']
        ],
        construction,
        constructionData = [
            ['', '', '', '', '', '']
        ],
        replacement,
        replacementData = [
            ['', '', '', '', '']
        ],
        catastrophy,
        catastrophyData = [
            ['', '', '']
        ],
        auto,
        autoData = [
            ['', '', '', '', '', '', '', '', '']
        ],
        aircraft,
        aircraftData = [
            ['', '', '', '', '', '', '', '', '', '']
        ],
        workcompLocation,
        workcompLocationData = [
            ['', '', '', '', '', '']
        ],
        workcompPayroll,
        workcompPayrollData = [
            ['', '', '', '', '', '', '']
        ],
        envLocation,
        envLocationData = [
            ['', '', '', '', '', '']
        ],
        envInDoor
        envInDoorData = [
            ['', '']
        ],
        envOutDoor,
        envOutDoorData = [
            ['', '', '']
        ],
        envOutDoorAbove,
        envOutDoorAboveData = [
            ['', '', '']
        ];

    content.siblings().hide();
    content.show();

    location = $j(document.getElementById('location')).handsontable({
        data: locationData,
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

    construction = $j(document.getElementById('construction')).handsontable({
        data: constructionData,
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

    replacement = $j(document.getElementById('replacement')).handsontable({
        data: replacementData,
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

    catastrophy = $j(document.getElementById('catastrophy')).handsontable({
        data: catastrophyData,
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

    auto = $j(document.getElementById('auto')).handsontable({
        data: autoData,
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

    aircraft = $j(document.getElementById('aircraft-vehicle')).handsontable({
        data: aircraftData,
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

    workcompLocation = $j(document.getElementById('workcompLocation')).handsontable({
        data: workcompLocationData,
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

    workcompPayroll = $j(document.getElementById('workcompPayroll')).handsontable({
        data: workcompPayrollData,
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

    envLocation = $j(document.getElementById('envLocation')).handsontable({
        data: envLocationData,
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

    envInDoor = $j(document.getElementById('envInDoor')).handsontable({
        data: envInDoorData,
        minSpareRows: 1,
        colHeaders: [
            'Tank Construction',
            'Chemical Type'
        ],
        contextMenu: true,
        columnSorting: true,
        search: true
    });

    envOutDoor = $j(document.getElementById('envOutDoor')).handsontable({
        data: envOutDoorData,
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

    envOutDoorAbove = $j(document.getElementById('envOutDoorAbove')).handsontable({
        data: envOutDoorAboveData,
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
        var tab = $j('#' + this.id);

        content = $j('#' + this.id + '-tab');

        tab.siblings().removeClass('active');
        tab.addClass('active');

        content.siblings().hide();
        content.show();

    });

    function initTabs () {
        var id = '#js-' + view,
            tab = $j(id);
            
        tab.siblings().removeClass('active');
        tab.addClass('active');
    }

    initTabs();

})(window, jQuery);