function mygetOptions() {
    
	Graph_MMR_AllStates();
}


function Graph_MMR_AllStates() {
	$('#lineChartMMRAllStates').remove(); // this is my <canvas> element
  $('#myChartContainerAllStates').append('<canvas id="lineChartMMRAllStates" height="275"></canvas>');
var densityCanvas = document.getElementById("lineChartMMRAllStates");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 9;

var chartData = {
  labels: ["2017","2018","2019"],
  
  datasets: [{ label: 'A & N Islands', data: [313.76, 119.79, 372.2], backgroundColor: '#660066', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#660066' },
{ label: 'Andhra Pradesh', data: [79.02, 57.96, 65.32], backgroundColor: '#FF8080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF8080' },
{ label: 'Arunachal Pradesh', data: [87.81, 12.42, 38.43], backgroundColor: '#0066CC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0066CC' },
{ label: 'Assam', data: [186.25, 162.81, 150.96], backgroundColor: '#CCCCFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#CCCCFF' },
{ label: 'Bihar', data: [74.82, 61.5, 55.85], backgroundColor: '#000080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#000080' },
{ label: 'Chandigarh', data: [20.73, 52.1, 63.38], backgroundColor: '#FF00FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF00FF' },
{ label: 'Chhattisgarh', data: [156.27, 115.08, 154.27], backgroundColor: '#FFFF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF00' },
{ label: 'Dadra & Nagar Haveli', data: [108.05, 110.62, 67.6], backgroundColor: '#00FFFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FFFF' },
{ label: 'Daman & Diu', data: [103.1, 15.48, 0.0], backgroundColor: '#800080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#800080' },
{ label: 'Delhi', data: [135.58, 149.16, 152.41], backgroundColor: '#800000', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#800000' },
{ label: 'Goa', data: [83.6, 66.49, 38.4], backgroundColor: '#008080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#008080' },
{ label: 'Gujarat', data: [90.93, 81.27, 83.46], backgroundColor: '#0000FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0000FF' },
{ label: 'Haryana', data: [103.24, 120.74, 142.61], backgroundColor: '#FFFF99', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF99' },
{ label: 'Himachal Pradesh', data: [58.91, 80.76, 60.35], backgroundColor: '#99CCFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#99CCFF' },
{ label: 'Jammu & Kashmir', data: [67.46, 48.16, 70.55], backgroundColor: '#FF99CC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF99CC' },
{ label: 'Jharkhand', data: [132.18, 116.95, 140.26], backgroundColor: '#CC99FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#CC99FF' },
{ label: 'Karnataka', data: [75.84, 66.46, 77.15], backgroundColor: '#FFCC99', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFCC99' },
{ label: 'Kerala', data: [59.62, 24.78, 42.2], backgroundColor: '#3366FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#3366FF' },
{ label: 'Lakshadweep', data: [0.0, 0.0, 385.6], backgroundColor: '#33CCCC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#33CCCC' },
{ label: 'Madhya Pradesh', data: [144.79, 147.57, 158.57], backgroundColor: '#99CC00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#99CC00' },
{ label: 'Maharashtra', data: [62.86, 62.65, 79.18], backgroundColor: '#FFCC00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFCC00' },
{ label: 'Manipur', data: [76.37, 51.43, 53.09], backgroundColor: '#FF6600', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF6600' },
{ label: 'Meghalaya', data: [287.34, 189.24, 199.65], backgroundColor: '#666699', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#666699' },
{ label: 'Mizoram', data: [114.38, 125.23, 38.94], backgroundColor: '#969696', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#969696' },
{ label: 'Nagaland', data: [133.81, 66.67, 101.47], backgroundColor: '#003366', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#003366' },
{ label: 'Odisha', data: [161.49, 99.07, 97.83], backgroundColor: '#339966', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#339966' },
{ label: 'Puducherry', data: [66.25, 27.22, 9.58], backgroundColor: '#333300', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#333300' },
{ label: 'Punjab', data: [147.9, 123.27, 109.71], backgroundColor: '#993300', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#993300' },
{ label: 'Rajasthan', data: [93.4, 99.81, 103.57], backgroundColor: '#993366', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#993366' },
{ label: 'Sikkim', data: [82.73, 224.78, 328.32], backgroundColor: '#333333', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#333333' },
{ label: 'Tamil Nadu', data: [62.77, 49.67, 45.96], backgroundColor: '#FF0000', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF0000' },
{ label: 'Telangana', data: [43.54, 53.25, 83.9], backgroundColor: '#00FF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FF00' },
{ label: 'Tripura', data: [135.69, 83.18, 70.77], backgroundColor: '#0000FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0000FF' },
{ label: 'Uttar Pradesh', data: [147.17, 134.87, 110.89], backgroundColor: '#FFFF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF00' },
{ label: 'Uttarakhand', data: [97.15, 113.16, 124.38], backgroundColor: '#FF00FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF00FF' },
{ label: 'West Bengal', data: [97.41, 87.7, 79.31], backgroundColor: '#00FFFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FFFF' }]
};

var chartOptions = {spanGaps: true,
     title: {
            display: true,
			fontSize: 19,
            text: 'Maternal Mortality Rate across States'
        },

	legend: {
      position: 'right',
      labels: {
            usePointStyle:true
        }
      },
	
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

function init() {
    mygetOptions();
	
}
// Initialize the dashboard
init();
/**
* BONUS Solution
**/
