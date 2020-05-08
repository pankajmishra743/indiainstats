function Graph_IMR_India(AIIMRABY, AIIMRnonABY) {
	$('#lineChartIMRAllIndia').remove(); // this is my <canvas> element
  $('#myChartContainerAllIndia1').append('<canvas id="lineChartIMRAllIndia" height="275"></canvas>');
var densityCanvas = document.getElementById("lineChartIMRAllIndia");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 13;

var abyData = {
  label: 'IMR with ABY Implemented',
  data: AIIMRABY,
  backgroundColor: 'rgba(225, 125, 25, 1)',
  borderWidth: 0,
  yAxisID: "y-axis-home",
  fill: false
};

var nonabyData = {
  label: 'IMR with ABY Not Implemented',
  data: AIIMRnonABY,
  backgroundColor: 'rgba(1, 24, 1, 1)',
  borderWidth: 0,
  fill: false
  //yAxisID: "y-axis-away"
};

var chartData = {
  labels: ["2017","2018","2019"],
  
  datasets: [abyData,nonabyData] 
};

var chartOptions = {
	
  scales: {
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: .5,
	  gridLines: {
                display:false
            },
	  ticks:{
        beginAtZero:true
    }
	}],
    yAxes: [{
      id: "y-axis-home",
	  gridLines: {
                display:false
            },
	  ticks:{
              beginAtZero:true
	  }
    }
	    //, {
      //id: "y-axis-away",
	//  ticks:{
          ///    beginAtZero:true
	  //}
    //}
	   ]
  }
};


   
var barChart = new Chart(densityCanvas, {
  type: 'line',
  data: chartData,
  options: chartOptions,
  
});
}
