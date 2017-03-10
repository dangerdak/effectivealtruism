google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

  var data = google.visualization.arrayToDataTable([
    ['Country', 'Lives saved'],
    [ 'Ethiopia', 3404 ],
    [ 'Tanzania', 1660 ],
    [ 'Malawi', 1388 ],
    [ 'Zanzibar', 821 ],
    [ 'Mozambique', 704 ],
    [ 'Uganda', 2154 ],
    [ 'Madagascar', 705 ],
    [ 'Niger', 587 ],
    [ 'Rwanda', 469 ],
    [ 'Yemen', 469 ],
    [ 'Democratic Republic of the Congo', 533 ],
    [ 'Côte d\'Ivoire', 235 ],
    [ 'Burundi', 122 ],
    [ 'Mauritania', 117 ],
    [ 'Senegal', 23 ],
    [ 'Sudan', 5 ],
    [ 'Nigeria', 5 ],
    [ 'Angola', 1 ],
    [ 'Burkina Faso', 6 ],
    [ 'Cambodia', 1 ],
    [ 'Cameroon', 6 ],
    [ 'Gambia', 3 ],
    [ 'Ghana', 367 ],
    [ 'Haiti', 4 ],
    [ 'India', 4 ],
    [ 'Indonesia', 3 ],
    [ 'Kenya', 5 ],
    [ 'Liberia', 3 ],
    [ 'Mali', 3 ],
    [ 'Namibia', 2 ],
    [ 'Nepal', 1 ],
    [ 'Papua New Guinea', 158 ],
    [ 'Sao Tome and Principe', 1 ],
    [ 'Sierra Leone', 7 ],
    [ 'Togo', 325 ],
    [ 'Zambia', 45 ] 
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
