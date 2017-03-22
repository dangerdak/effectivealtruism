/*
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
    [el[0], el[1] + el[2] + el[3] + el[4], 
      'Total: ' + (el[1]  + el[2] + el[3] + el[4]) +
      (el[1] > 0 ? '\nSCI: ' + el[1] : '') + 
      (el[2] > 0 ? '\nDtW: ' +  el[2] : '') + 
      (el[3] > 0 ? '\nAMF: ' + el[3] : '') + 
      (el[4] > 0 ? '\nMC: ' + el[4] : '')]
  );

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
*/

  /*********************************/
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var rows = [
    [1966,  1, 
      'Hewlett Foundation',
      'Makes grants for an array of issues including effective philanthropy research.',
      'http://www.hewlett.org/about-us/',
    ],
    [1992,  1, 
      'CharityWatch',
      'Rates charities based on percentage of donations spent on programs, as well as fundraising effiecency.',
      'https://www.charitywatch.org/charitywatch-criteria-methodology',
    ],
    [1994,  1, 
      'GuideStar',
      'Provides financial data on thousands of non-profits for users to compare and evaluate.',
      'http://www.guidestar.org/Home.aspx'
    ],
    [1999,  1, 
      'McKinsey non-profit consultancy branch',
      'Focuses on global health, aid and development.',
      'http://www.mckinsey.com/industries/social-sector/how-we-help-clients'
    ],
    [2000,  1, 
      'Faunalytics',
      'Helps animal advocacy charities evaluate and increase the impact of their programs.',
      'https://faunalytics.org/',
    ],
    [2001,  1, 
      'Charity Navigator',
      'Evaluates charities based on financial efficiency and capacity, using their tax returns.',
      'https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=1284',
      'The Centre for Effective Philanthropy',
      'Helps grantmakers maximise their effectiveness.',
      'http://effectivephilanthropy.org/about/how-we-work/'
    ],
    [2005,  1, 
      'Intelligent Giving',
      'Advised donors on how to make the most satisfactory use of their money. Stopped operating 2009.',
      'https://en.wikipedia.org/wiki/Intelligent_Giving'
    ],
    [2006,  1, 
      'Nonprofit Marketplace Initiative',
      'Initiative of the Hewlett Foundation. Aimed to encourage 10% of donors to be more evindence based in their giving. Closed 2014 as they felt that they weren\'t reaching their goals.',
      'http://www.hewlett.org/follow-up-on-our-decision-to-end-the-nonprofit-marketplace-initiative/',
      'Center for High Impact Philanthropy',
      'Researches causes and methods of measuring social impact.',
      'http://www.impact.upenn.edu/about/what-we-do/'
    ],
    [2007,  1, 
      'GreatNonProfits',
      'Platform for community-sourced reviews and ratings of non-profits.',
      'http://www.about.greatnonprofits.org/',
      'GiveWell',
      'Provides in-depth analyses on the cost-effectiveness of charities in terms of lives saved/improved per dollar rather than e.g. overhead costs.',
      'http://www.givewell.org/about'
    ],
    [2010,  1, 
      'Charity Navigator revamp (CN 2.0)',
      'Charity Navigator announces move towards 3-dimensional rating system covering financial health, accountability and transparency, and results reporting. The 3rd dimension hasn\'t been incorporated yet.',
      'https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=1284',
    ],
    [2012,  1, 
      'Animal Charity Evaluators',
      'Focuses on effective ways to help animals by prioritizing causes and then evaluating charities and interventions within those causes. Like GiveWell for animals.',
      'https://animalcharityevaluators.org/donation-advice/top-charities/'
    ],
  ];
  var evalData = new google.visualization.DataTable();
  evalData.addColumn('number', 'Year');
  evalData.addColumn('number', 'Evaluators');
  evalData.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}});
  evalData.addRows(rows.map(function(row) {
    return [row[0], row[1], createHtml(row)];
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

  // Close tooltip when document clicked
  // Unless clicked within chart area
  document.getElementById('main').addEventListener('click', function() {
    chart.setSelection([{}]);
  });
  document.getElementById('timeline').addEventListener('click', function(e) {
    e.stopPropagation();
  });


  var backButton = document.getElementById('timeline-back');
  var forwardButton = document.getElementById('timeline-forward');
  [backButton, forwardButton].forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      var current = chart.getSelection();
      if (current.length) {
        var currentRow = current[0].row;
        current[0].row = index ?
           (currentRow + 1) % rows.length : 
           currentRow === 0 ? rows.length - 1 : currentRow - 1;
      }
      else {
        current = index ?
          [{row: 0, column: 1}] :
          [{row: rows.length - 1, column: 1}];
      }
      chart.setSelection(current);
    });
  });
}

function createHtml(row) {
  var html = '<strong>' + row.shift() + '</strong>';
  row.shift();
  while (row.length) {
    html += '<br><strong> ' + row.shift() + ': ' + '</strong>' + 
      row.shift() + 
      ' <a target="_blank" href="' + row.shift() + '">More info</a><br>';
  }
  return html;
}

window.addEventListener('resize', function() {
  //drawRegionsMap();
  drawChart();
});

