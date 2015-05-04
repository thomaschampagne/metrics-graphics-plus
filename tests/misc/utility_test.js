module('utility');

test('MG.convert.date', function() {
    var data = [{'date': '2014-01-01', 'value': 12},
               {'date': '2014-03-01', 'value': 18}];

    MG.convert.date(data, 'date');
    equal($.type(data[0].date), 'date', 'First date is of type date');
    equal($.type(data[0].date), 'date', 'Second date is of type date');
});

test('MG.convert.date with an alternative timestamp style', function() {
    var data = [{'date': '2014-20-12', 'value': 12},
               {'date': '2014-21-12', 'value': 18}];

    MG.convert.date(data, 'date', '%Y-%d-%m');
    equal($.type(data[0].date), 'date', 'First date is of type date');
    equal($.type(data[0].date), 'date', 'Second date is of type date');
});

test('MG.convert.number', function() {
    var data = [{'date': '2014-20-12', 'value': '12'},
               {'date': '2014-21-12', 'value': '18'}];

    MG.convert.number(data, 'value');
    equal($.type(data[0].value), 'number', 'First value is a number');
    equal($.type(data[0].value), 'number', 'Second value is a number');
});

test('mg_get_svg_child_of', function(){
    d3.select('#qunit-fixture').append('svg');

    var svg_element_with_node = mg_get_svg_child_of(document.querySelector('#qunit-fixture'));
    var svg_element_with_text = mg_get_svg_child_of('#qunit-fixture');

    equal(svg_element_with_node.length, 1, 'Node-based argument should return a d3 selection with svg.');
    equal(svg_element_with_node.length, 1, 'Selector-based argument should return a d3 selection with svg.');
});


test('mg_target_ref', function() {
    var chart_area = document.createElement('div');
    chart_area.id = 'someChartId';
    equal(mg_target_ref(chart_area), 'someChartId', 'uses existing DOM ID if present');

    var chart_area2 = document.createElement('div');
    var id = mg_target_ref(chart_area2);
    equal(mg_target_ref(chart_area2), id, 'reuses generated DOM ID');
    ok(chart_area2.id.match(/mg-[\d]/), 'applies generated ID to DOM element');
});
