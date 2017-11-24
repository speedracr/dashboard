initGalleryCharts();
var chartsData = {};

function initGalleryCharts() {
  google.setOnLoadCallback(initCharts);
}



function initCharts() {
  // $(window).resize(drawCharts);
  setupData();
}

function setupData() {
 // pie:
  chartsData.piechart = {};
  chartsData.piechart.data = new google.visualization.DataTable();
  chartsData.piechart.data.addColumn('string', 'Medium');
  chartsData.piechart.data.addColumn('number', 'Anteil');
  chartsData.piechart.data.addRows([
    ['Tablet', 12.1],
    ['Smartphone', 42.8],
    ['Desktop', 45.1]
  ]);

  chartsData.piechart.chart = new google.visualization.PieChart(document.getElementById('fa_devices'));
  chartsData.piechart.options = {
    chartArea: {
      left: '5%',
      top: '9%',
      width: '100%',
      height: '82%'
    },
    colors: ['#77C4D3', '#333745', '#EA2E49'],
    backgroundColor: 'none',
    fontSize: '16',
    fontName: 'Fira Sans',
    animation: {
        duration: 1000,
        easing: 'out',
        startup: true
    }    
  };

  chartsData.weekforecast = {};
  chartsData.weekforecast.data = google.visualization.arrayToDataTable([
            ['Day', 'Nachmittag', 'Abend'],
            ['Montag', 2, 6],
            ['Dienstag', 31, 26],
            ['Mittwoch', 19, 31],
            ['Donnerstag', 25, 75],
            ['Freitag',  23, 87],
            ['Samstag',  98, 159],
            ['Sonntag',  109, 143]                  
          ]);

  chartsData.weekforecast.chart = new google.visualization.LineChart(document.getElementById('fa_weekforecast'));
  
  chartsData.weekforecast.options = {
            title: 'Klicks / Vorstellung',
            legend: { position: 'right'},
            fontName: 'Fira Sans',
            backgroundColor: 'none',
            colors: ['#77C4D3', '#333745'],
            animation: {
              duration: 1000,
              easing: 'out',
              startup: true
            }
  };

  chartsData.bonuscampaigns = {};
  chartsData.bonuscampaigns.data = google.visualization.arrayToDataTable([
    ['Aktion', 'versendet', 'geklickt', 'gekauft'],
    ['Premiereneinladung', 3502, 2905, 101],
    ['Popcorn-Combo', 4021, 2021, 40],
    ['2-for-1 Donnerstag', 2844, 1078, 29],
    ['Familienpaket', 2885, 1456, 73 ]
    ]);

  chartsData.bonuscampaigns.chart = new google.visualization.BarChart(document.getElementById('fa_bonuscampaigns'));

  chartsData.bonuscampaigns.options = {
    title: 'Bonusaktionen',
    fontName: 'Fira Sans',
    backgroundColor: 'none',
    animation: {
        duration: 1000,
        easing: 'out',
        startup: true
    },
    colors: ['#333745', '#77C4D3', '#EA2E49'],
    vAxis: {
      title: 'Aktion',  
      titleTextStyle: {color: '#222'},
      fontName: 'Fira Sans'
    }
  };

  chartsData.movielist = {}
  chartsData.movielist.data = google.visualization.arrayToDataTable([
    ['Filmtitel', 'versendet', 'geklickt', 'gekauft'],  
    ['Avengers 2: Age of Ultron', 8950, 877, 102],  
    ['Asterix im Land der Götter', 7600, 101, 21],
    ['Der Knastcoach', 5611, 39, 9],
    ['Der Nanny', 6099, 54, 11],
    ['Das Versprechen eines Lebens', 7600, 65, 0],
    ['Mad Max: Fury Road', 8956, 945, 459],
    ['Pitch Perfect 2', 7848, 98, 83],
    ['Shaun das Schaf', 4090, 341, 102],
    ['Der Babadook', 3499, 12, 3],
    ['Die Gärtnerin von Versailles', 3478, 35, 0],
    ['Fast & Furious 7', 2450, 43, 2],
    ['Das ewige Leben', 2988, 30, 14],
    ['The Gunman', 3021, 83, 29]              
  ]);

  chartsData.movielist.chart = new google.visualization.BarChart(document.getElementById('fa_filminterest'));
  chartsData.movielist.options = {
    title: 'Filmempfehlungen',
    backgroundColor: 'none',
    fontName: 'Fira Sans',
    animation: {
        duration: 1000,
        easing: 'out',
        startup: true
    },
    colors: ['#333745', '#77C4D3', '#EA2E49'],
    vAxis: {
      title: 'Film',  
      titleTextStyle: {color: '#222'},
      fontName: 'Fira Sans'
    }
  };



  chartsData.piechart.chart.draw(chartsData.piechart.data, chartsData.piechart.options);
  chartsData.weekforecast.chart.draw(chartsData.weekforecast.data, chartsData.weekforecast.options); 
  chartsData.bonuscampaigns.chart.draw(chartsData.bonuscampaigns.data, chartsData.bonuscampaigns.options);
  chartsData.movielist.chart.draw(chartsData.movielist.data, chartsData.movielist.options); 

}