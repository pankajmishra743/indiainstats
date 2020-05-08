function Graph_MMR(IndiaData,StateData,state) {
	$('#lineChartMMR').remove(); // this is my <canvas> element
  $('#myChartContainer1').append('<canvas id="lineChartMMR" height="375"></canvas>');
var densityCanvas = document.getElementById("lineChartMMR");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 14;

var stateData = {
  label: state + ' MMR',
  data: StateData,
  backgroundColor: 'rgba(225, 125, 25, 1)',
  borderWidth: 0,
  yAxisID: "y-axis-home",
  fill: false
};

var indiaData = {
  label: 'All India MMR',
  data: IndiaData,
  backgroundColor: 'rgba(1, 24, 1, 1)',
  borderWidth: 0,
  fill: false
  //yAxisID: "y-axis-away"
};

var chartData = {
  labels: ["2017","2018","2019"],
  
  datasets: [stateData,indiaData] 
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
