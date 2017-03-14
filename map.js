google.charts.load('current', {'packages':['corechart','geochart']});
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

  /*********************************/
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var rows = [
          [1869,  1, 'Charity Organisation Societies begin in England'],
          [1941,  1, 'Form 990 enters use'],
          [1956,  1, 'Foundation Center is founded'],
          [1966,  1, 'Hewlett Foundation established'],
          [1982,  1, 'The National Center for Charitable Statistic (NCCS) launches'],
          [1987,  1, 'The NonProfit Times is launched'],
          [1988,  1, 'The Chronicle of Philanthropy is founded'],
          [1992,  1, 'CharityWatch is founded'],
          [1994,  1, 'GuideStar'],
          [1999,  1, 'McKinsey sets up a non-profit branch focused on global health, aid and development'],
          [2000,  1, 'The Bridgespan Group, Faunalytics, FGS, Ministry Watch'],
          [2001,  1, 'Charity Navigator, Centre for Effective Philanthropy, BBB Wise Giving Alliance'],
          [2002,  1, 'New Philanthropy Capital'],
          [2003,  1, 'Stanford Social Innovation Review, the Redstone Strategy Group'],
          [2005,  1, 'Intelligent Giving: advises donors on how to make the most satisfactory use of their money.'],
          [2006,  1, 'Nonprofit Marketplace Initiative, Center for High Impact Philanthropy'],
          [2007,  1, 'GreatNonProfits. GiveWell launches: Focuses on the cost-effectiveness of charities, rather than e.g. administrative costs.'],
          [2008,  1, 'Philanthropedia as Nonprofit Knowledge Network, the International Aid Transparency Initiative'],
          [2010,  1, 'Jumo, Charity Navigator revamp (CN 2.0)'],
          [2011,  1, 'Open Philanthropy Project'],
          [2012,  1, 'Animal Charity Evaluators, focused on effective ways to help animals'],
          [2013,  1, 'Inside Philanthropy'],
          [2015,  1, 'ImpactMatters']
        ];
        var evalData = new google.visualization.DataTable();
        evalData.addColumn('number', 'Year');
        evalData.addColumn('number', 'Evaluators');
        evalData.addColumn({type: 'string', role: 'tooltip'});
        evalData.addRows(rows.map(function(row) {
          return [row[0], row[1], row[0].toString() + ': ' + row[2]];
        })
       );

        var options = {
          colors: ['#649f94', '#245db1', '#f9c19c'],
          lineWidth: 1,
          title: 'Timeline of Charity Evaluators',
          titleTextStyle: {
            color: '#649f94',
            fontName: 'Rock Salt',
            fontSize: 20,
          },
          tooltip: {
            textStyle: {
              fontName: 'serif',
              color: '#ffac1f',
            },
          },
          pointSize: 15,
          height: 200,
          legend: {
            position: 'none',
          },
          vAxis: {
            textPosition: 'none',
            ticks: [],
            baselineColor: '#fff',
            viewWindowMode: 'maximized',
          },
          hAxis: {
            title: 'Year',
            viewWindowMode: 'maximized',
            ticks: [1869, 2015],
            format: '',
            gridlines: {
              color: '#fff',
            },
            titleTextStyle: {
              color: '#649f94',
            },
            textStyle: {
              color: '#649f94',
            },
          },
          animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
          },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(evalData, options);
      }
}
