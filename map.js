google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var raw = [
    ['Burundi', 200000,null,null],
    ['Côte d\'Ivoire', 1070000,null,null],
    ['Democratic Republic of Congo', 340000,null,4176371],
    ['Ethiopia', 1220000,44992,null],
    ['India',null,2227764,null],
    ['Kenya',null,1658238,null],
    ['Liberia', 70000,null,null],
    ['Madagascar', 90000,null,null],
    ['Malawi', 520000,null,4554015],
    ['Mauritania',null,null,null],
    ['Mozambique', 1250000,null,null],
    ['Niger', 10000,null,null],
    ['Nigeria',null,10870,null],
    ['Pakistan',null,1535,null],
    ['Rwanda', 340000,null,null],
    ['Sudan', 370000,null,null],
    ['Tanzania', 20000,null,null],
    ['Tumikia',null,215890,null],
    ['Uganda', 100000,null,null],
    ['Vietnam',null,91519,null],
    ['Yemen', 130000,null,null],
    ['Zanzibar', 250000,null,null],
    ['Zimbabwe',null,null,null]
  ];
  var totals = raw.map(el => [el[0], el[1] + el[2] + el[3]]).filter(el => (el[1] > 0));
  totals.unshift(['Country', 'Total expenditure 2015']);

  var data = google.visualization.arrayToDataTable(totals);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
