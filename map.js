google.charts.load('current', {'packages':['corechart','geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  // [country, SCI, DtW, AMF, MC]
  var spending = [
    ['Burkina Faso',0,0,0,3052307],
    ['Burundi', 200000,0,0,0],
    ['Côte d\'Ivoire', 1070000,0,0,0],
    ['Democratic Republic of Congo', 340000,0,4176371,0],
    ['Ethiopia', 1220000,44992,0,0],
    ['Guinea',0,0,0,1059995],
    ['India',0,2227764,0,0],
    ['Kenya',0,1658238,0,0],
    ['Liberia', 70000,0,0,0],
    ['Madagascar', 90000,0,0,0],
    ['Malawi', 520000,0,4554015,0],
    ['Mali',0,0,0,2831662],
    ['Mozambique', 1250000,0,0,0],
    ['Niger', 10000,0,0,1488356],
    ['Nigeria',0,10870,0,3741732],
    ['Pakistan',0,1535,0,0],
    ['Rwanda', 340000,0,0,0],
    ['Sudan', 370000,0,0,0],
    ['Tanzania', 20000,0,0,0],
    ['The Gambia',0,0,0,524578],
    ['Tumikia',0,215890,0,0],
    ['Uganda', 100000,0,0,0],
    ['Vietnam',0,91519,0,0],
    ['Yemen', 130000,0,0,0],
    ['Zanzibar', 250000,0,0,0],
  ];
  var totals = spending.map(el => [el[0], el[1] + el[2] + el[3] + el[4]]).filter(el => (el[1] > 0));
  totals.unshift(['Country', 'Total expenditure 2015 ($)']);

  // [SCI, DtW, AMF]
  var lifePrices = [3647, 2165, 1981, 3226];

  var lives = spending.map(function(row) {
    return [row[0], ...row.slice(1).map(function(amount, index) {
      return Math.round(amount / lifePrices[index]);
    })];
  });
  // [Country, Total, SCI, DtW, AMF]
  var totalLives = lives.map(el =>
    [el[0], el[1] + el[2] + el[3] + el[4], 'Total: ' + (el[1]  + el[2] + el[3] + el[4]) + ' SCI: ' + el[1] + ' DtW: ' +  el[2] + ' AMF: ' + el[3] + ' MC ' + el[4]]);

  var lifeData = new google.visualization.DataTable();
        lifeData.addColumn('string', 'Country');
        lifeData.addColumn('number', 'Total Lives');
        lifeData.addColumn({type: 'string', role: 'tooltip'});
        lifeData.addRows(totalLives);


  var options = {
    legend: {
    },
    region: '002',
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(lifeData, options);
}

  /*********************************/
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var rows = [
    /*
    [1941,  1,
      'Form 990 comes into use in the US',
      'Provides the public with financial information about non-profits.',
      'https://en.wikipedia.org/wiki/Form_990'
    ],
    [1956,  1,
      'Foundation Center is founded',
      'Provides advice and information about grants in the philanthropic sector.',
      'https://en.wikipedia.org/wiki/Foundation_Center'
    ],*/
    [1966,  1, 
      'Hewlett Foundation established',
      'Makes grants for an array of issues including effective philanthropy research.',
      'http://www.hewlett.org/about-us/',
      true
    ],
    [1982,  1, 
      'The National Center for Charitable Statistic (NCCS) launches',
      'Provides a variety of data on the non-profit sector in the US.',
      'http://nccs.urban.org/nccs-data-and-tools'
    ],
    [1992,  1, 
      'CharityWatch is founded',
      'A charity watchdog which rates charities based on percentage of donations spent on programs, as well as fundraising effiecency.',
      'https://www.charitywatch.org/charitywatch-criteria-methodology',
      true
    ],
    [1994,  1, 
      'GuideStar launches',
      'An information service providing data on thousands of non-profits, for users to compare and evaluate themselves.',
      'http://www.guidestar.org/Home.aspx'
    ],
    [1999,  1, 
      'McKinsey sets up a non-profit branch',
      'Focused on global health, aid and development.',
      'http://www.mckinsey.com/industries/social-sector/how-we-help-clients'
    ],
    [2000,  1, 
      'Faunalytics launches',
      'Helps animal advocacy charities evaluate and increase the impact of their programs.',
      'https://faunalytics.org/',
    ],
    [2001,  1, 
      'Charity Navigator, Centre for Effective Philanthropy'],
    [2002,  1, 
      'New Philanthropy Capital'],
    [2003,  1, 
      'The Redstone Strategy Group'],
    [2005,  1, 
      'Intelligent Giving: advises donors on how to make the most satisfactory use of their money.'],
    [2006,  1, 
      'Nonprofit Marketplace Initiative, Center for High Impact Philanthropy'],
    [2007,  1, 
      'GreatNonProfits. GiveWell launches: Focuses on the cost-effectiveness of charities, rather than e.g. administrative costs.'],
    [2008,  1, 
      'Philanthropedia as Nonprofit Knowledge Network, the International Aid Transparency Initiative'],
    [2010,  1, 
      'Jumo, Charity Navigator revamp (CN 2.0)'],
    [2011,  1, 
      'Open Philanthropy Project'],
    [2012,  1, 
      'Animal Charity Evaluators, focused on effective ways to help animals'],
  ];
  var evalData = new google.visualization.DataTable();
  evalData.addColumn('number', 'Year');
  evalData.addColumn('number', 'Evaluators');
  evalData.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}});
  evalData.addRows(rows.map(function(row) {
    return [row[0], row[1], createHtml(row[0], row[2], row[3], row[4])];
  })
 );

  var options = {
    colors: ['#649f94'],
    lineWidth: 1,
    titleTextStyle: {
      color: '#649f94',
      fontName: 'Rock Salt',
      fontSize: 20,
    },
    tooltip: {
      isHtml: true,
      trigger: 'selection',
      textStyle: {
        fontName: 'serif',
        color: '#ffac1f',
      },
      ignoreBounds: false,
    },
    pointSize: 8,
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
      ticks: [1966, 2012],
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
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(evalData, options);
}

function createHtml(year, title, info, url) {
  return '<strong>' + year +  ' ' + title + ': ' + '</strong>' + info + 
    ' <a target="_blank" href="' + url + '">More info</a>';
}

window.addEventListener('resize', function() {
  drawRegionsMap();
  drawChart();
});
