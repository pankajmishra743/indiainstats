function mygetOptions() {
    
	Graph_IMR_AllStates();
}


function Graph_IMR_AllStates() {
	$('#lineChartIMRAllStates').remove(); // this is my <canvas> element
  $('#myChartContainerAllStates1').append('<canvas id="lineChartIMRAllStates" height="275"></canvas>');
var densityCanvas = document.getElementById("lineChartIMRAllStates");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 9;

var chartData = {
  labels: ["2017","2018","2019"],
  
  datasets: [{ label: ' INDIA', data: [14.5, 14.3, 14.31], backgroundColor: '#952E19', pointHoverRadius: 3, pointRadius: 2, borderWidth: 5, fill: false, borderColor: '#952E19', borderDash: [10,5] },
{ label: ' A & N Islands', data: [21.16, 11.27, 23.29], backgroundColor: '#660066', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#660066' },
{ label: ' Andhra Pradesh', data: [10.89, 10.94, 12.4], backgroundColor: '#FF8080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF8080' },
{ label: ' Arunachal Pradesh', data: [5.79, 5.73, 4.18], backgroundColor: '#0066CC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0066CC' },
{ label: ' Assam', data: [21.11, 20.42, 20.69], backgroundColor: '#CCCCFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#CCCCFF' },
{ label: ' Bihar', data: [6.38, 5.66, 4.95], backgroundColor: '#000080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#000080' },
{ label: ' Chandigarh', data: [46.8, 53.94, 46.97], backgroundColor: '#FF00FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF00FF' },
{ label: ' Chhattisgarh', data: [17.96, 17.4, 20.34], backgroundColor: '#FFFF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF00' },
{ label: ' Dadra & Nagar Haveli', data: [27.88, 27.65, 25.57], backgroundColor: '#00FFFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FFFF' },
{ label: ' Daman & Diu', data: [7.38, 11.4, 9.57], backgroundColor: '#800080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#800080' },
{ label: ' Delhi', data: [15.4, 16.15, 17.55], backgroundColor: '#800000', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#800000' },
{ label: ' Goa', data: [5.66, 8.48, 6.03], backgroundColor: '#008080', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#008080' },
{ label: ' Gujarat', data: [22.6, 17.96, 17.55], backgroundColor: '#0000FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0000FF' },
{ label: ' Haryana', data: [10.18, 20.08, 23.43], backgroundColor: '#FFFF99', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF99' },
{ label: ' Himachal Pradesh', data: [11.23, 13.86, 16.75], backgroundColor: '#99CCFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#99CCFF' },
{ label: ' Jammu & Kashmir', data: [8.12, 7.59, 8.17], backgroundColor: '#FF99CC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF99CC' },
{ label: ' Jharkhand', data: [6.26, 6.74, 7.91], backgroundColor: '#CC99FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#CC99FF' },
{ label: ' Karnataka', data: [12.48, 11.12, 11.44], backgroundColor: '#FFCC99', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFCC99' },
{ label: ' Kerala', data: [5.26, 3.31, 3.1], backgroundColor: '#3366FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#3366FF' },
{ label: ' Lakshadweep', data: [17.92, 12.96, 6.43], backgroundColor: '#33CCCC', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#33CCCC' },
{ label: ' Madhya Pradesh', data: [23.31, 24.98, 24.98], backgroundColor: '#99CC00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#99CC00' },
{ label: ' Maharashtra', data: [11.35, 11.15, 10.41], backgroundColor: '#FFCC00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFCC00' },
{ label: ' Manipur', data: [5.57, 2.87, 3.48], backgroundColor: '#FF6600', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF6600' },
{ label: ' Meghalaya', data: [29.31, 22.69, 29.24], backgroundColor: '#666699', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#666699' },
{ label: ' Mizoram', data: [21.86, 19.26, 20.48], backgroundColor: '#969696', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#969696' },
{ label: ' Nagaland', data: [7.99, 8.24, 7.09], backgroundColor: '#003366', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#003366' },
{ label: ' Odisha', data: [23.57, 21.75, 20.15], backgroundColor: '#339966', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#339966' },
{ label: ' Puducherry', data: [11.36, 11.07, 7.18], backgroundColor: '#333300', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#333300' },
{ label: ' Punjab', data: [10.39, 8.52, 7.8], backgroundColor: '#993300', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#993300' },
{ label: ' Rajasthan', data: [13.54, 22.41, 21.03], backgroundColor: '#993366', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#993366' },
{ label: ' Sikkim', data: [22.1, 19.75, 14.45], backgroundColor: '#333333', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#333333' },
{ label: ' Tamil Nadu', data: [8.48, 7.8, 11.32], backgroundColor: '#FF0000', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF0000' },
{ label: ' Telangana', data: [4.94, 6.78, 5.41], backgroundColor: '#00FF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FF00' },
{ label: ' Tripura', data: [17.21, 13.97, 15.9], backgroundColor: '#0000FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#0000FF' },
{ label: ' Uttar Pradesh', data: [4.28, 3.39, 3.06], backgroundColor: '#FFFF00', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FFFF00' },
{ label: ' Uttarakhand', data: [6.26, 8.1, 8.78], backgroundColor: '#FF00FF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#FF00FF' },
{ label: ' West Bengal', data: [20.04, 19.23, 17.94], backgroundColor: '#00FFFF', pointHoverRadius: 2, pointRadius: 1, borderWidth: -5, fill: false, borderColor: '#00FFFF' }]
};

var chartOptions = {spanGaps: true,
     title: {
            display: true,
			fontSize: 19,
            text: 'Infant Mortality Rate across States'
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
