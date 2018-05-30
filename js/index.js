$(document).ready(function(){

  var stocks = [
    "AAPL",
    "BABA",
    "C",
    "DIS",
    "EDU"
  ];

  var urlString = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + stocks.toString() + "&types=chart&range=1m";
  console.log(urlString);
  
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart0);
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    
      
      var jsonData = $.ajax({
          url: urlString,
          dataType: "json",
          async: false
          }).responseText;
      var obj = JSON.parse(jsonData);
      console.log(obj);
  
      //var w1 = obj["EDU"]["chart"][0]["close"];
      //console.log(w1);
  var tables = [];
      for(i=0;i<stocks.length;i++) {
        tables[i] = [];
        var stockName = stocks[i];
        console.log(stockName);
        var length = obj[stockName]["chart"].length;
        for(j=length-1;j>=length-5;j--){
          var dayPrice = [
            obj[stockName]["chart"][j].label,
            obj[stockName]["chart"][j].close
          ];
          tables[i].push(dayPrice);
        }
        tables[i].reverse();
    }
  console.log(tables);
      //var data = [];
        //var charts = [];
        //     var names = [];
      // Define the chart to be drawn.
      //for(i=0;i<stocks.length;i++) {

        //console.log(data[i]);
        // Instantiate and draw the chart.
    //}
  var options = {
                  legend: 'none',
                  title:"",
                  width:400,
                  height:300};

  function drawChart0() {
          options.title = stocks[0];
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('number', 'price');
        data.addRows(tables[0]);
         var chart = new          google.visualization.LineChart(document.getElementById('chart_0'));
      chart.draw(data, options);
}
  
  function drawChart1() {
          options.title = stocks[1];
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('number', 'price');
        data.addRows(tables[1]);
         var chart = new          google.visualization.LineChart(document.getElementById('chart_1'));
      chart.draw(data, options);
}
  
    function drawChart2() {
          options.title = stocks[2];
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('number', 'price');
        data.addRows(tables[2]);
         var chart = new          google.visualization.LineChart(document.getElementById('chart_2'));
      chart.draw(data, options);
}
  
  function drawChart3() {
          options.title = stocks[3];
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('number', 'price');
        data.addRows(tables[3]);
         var chart = new          google.visualization.LineChart(document.getElementById('chart_3'));
      chart.draw(data, options);
}
  
  function drawChart4() {
          options.title = stocks[4];
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('number', 'price');
        data.addRows(tables[4]);
         var chart = new          google.visualization.LineChart(document.getElementById('chart_4'));
      chart.draw(data, options);
}
  
});