initGalleryCharts();
var chartsData = {};

function initGalleryCharts() {
  google.setOnLoadCallback(initCharts);
}

function generateInitialData(data) {
  var table = new google.visualization.DataTable();
  var headers = data.headers;

  for (var i = 0; i < headers.length; i++) {
    table.addColumn(headers[i]);
  }

  for (var rowIndex = 0; rowIndex < data.data.length; rowIndex++) {
    var row = [];

    for (var colIndex = 0; colIndex < data.data[rowIndex].length; colIndex++)
    {
      row.push(data.data[rowIndex][colIndex].value);
    }
    table.addRow(row);
  }
  return table;
}

function initCharts() {
  // $(window).resize(drawCharts);
  setupData();
  drawCharts();
}

function setupData() {
  // pie:
  chartsData.piechart = {};
  chartsData.piechart.data = new google.visualization.DataTable();
  chartsData.piechart.data.addColumn('string', 'Task');
  chartsData.piechart.data.addColumn('number', 'Hours per Day');
  chartsData.piechart.data.addRows([
    ['Work', 9],
    ['Eat', 4],
    ['Watch TV', 1],
    ['Sleep', 7]
  ]);
  chartsData.piechart.chart =
      new google.visualization.PieChart(document.getElementById('piechart'));
  chartsData.piechart.options = {
    chartArea: {
      left: '5%',
      top: '9%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#4285F4', '#76A7FA', '#A0C3FF'],
    // is3D: true,
    legend: 'none',
    pieSliceText: 'none'
  };

  // line:
  chartsData.linechart = {};
  chartsData.linechart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'a'},
      {type: 'number', label: 'b'}
    ],
    data: [
      [{value: '2008'}, {value: 1000, range: 500}, {value: 400, range: 200}],
      [{value: '2009'}, {value: 1170, range: 585}, {value: 460, range: 230}],
      [{value: '2010'}, {value: 660, range: 330}, {value: 1200, range: 600}],
      [{value: '2011'}, {value: 1030, range: 515}, {value: 540, range: 270}]
    ]
  };
  chartsData.linechart.data = generateInitialData(
      chartsData.linechart.dataSpec);

  chartsData.linechart.chart =
      new google.visualization.LineChart(document.getElementById('linechart'));
  chartsData.linechart.options = {
    animation: {
      duration: 1000,
      easing: 'inAndOut'
    },
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB'],
    legend: 'none',
    curveType: 'function',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.linechart.animation = function() {
    alterData(chartsData.linechart.data, chartsData.linechart.dataSpec);

    chartsData.linechart.chart.draw(
        chartsData.linechart.data, chartsData.linechart.options);
  };
  chartsData.linechart.animationInterval = 5000;

   // donut:
  chartsData.donutchart = {};
  chartsData.donutchart.data = new google.visualization.DataTable();
  chartsData.donutchart.data.addColumn('string', 'Task');
  chartsData.donutchart.data.addColumn('number', 'Hours per Day');
  chartsData.donutchart.data.addRows([
    ['Work', 9],
    ['Eat', 4],
    ['Watch TV', 1],
    ['Sleep', 7]
  ]);
  chartsData.donutchart.chart =
      new google.visualization.PieChart(document.getElementById('donutchart'));
  chartsData.donutchart.options = {
    chartArea: {
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#4285F4', '#76A7FA', '#A0C3FF'],
    pieHole: 0.4,
    legend: 'none',
    pieSliceText: 'none'
  };

}

function drawCharts() {
  $('.chart_container').each(function() {
    var id = $(this).attr('id');

    if (chartsData[id]) {
      chartsData[id].chart.draw(chartsData[id].data, chartsData[id].options);
      if (chartsData[id].animation != null) {
        setInterval(chartsData[id].animation, chartsData[id].animationInterval);
      }
    }
  });
}