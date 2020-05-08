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
  
  datasets: [{ label: 'A & N Islands', data: [313.76, 119.79, 372.2], backgroundColor: 'rgba(220,5,-2, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(220,5,-2, 1)' },
{ label: 'Andhra Pradesh', data: [79.02, 57.96, 65.32], backgroundColor: 'rgba(215,10,5, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(215,10,5, 1)' },
{ label: 'Arunachal Pradesh', data: [87.81, 12.42, 38.43], backgroundColor: 'rgba(210,15,12, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(210,15,12, 1)' },
{ label: 'Assam', data: [186.25, 162.81, 150.96], backgroundColor: 'rgba(205,20,19, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(205,20,19, 1)' },
{ label: 'Bihar', data: [74.82, 61.5, 55.85], backgroundColor: 'rgba(200,25,26, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(200,25,26, 1)' },
{ label: 'Chandigarh', data: [20.73, 52.1, 63.38], backgroundColor: 'rgba(195,30,33, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(195,30,33, 1)' },
{ label: 'Chhattisgarh', data: [156.27, 115.08, 154.27], backgroundColor: 'rgba(190,35,40, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(190,35,40, 1)' },
{ label: 'Dadra & Nagar Haveli', data: [108.05, 110.62, 67.6], backgroundColor: 'rgba(185,40,47, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(185,40,47, 1)' },
{ label: 'Daman & Diu', data: [103.1, 15.48, 0.0], backgroundColor: 'rgba(180,45,54, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(180,45,54, 1)' },
{ label: 'Delhi', data: [135.58, 149.16, 152.41], backgroundColor: 'rgba(175,50,61, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(175,50,61, 1)' },
{ label: 'Goa', data: [83.6, 66.49, 38.4], backgroundColor: 'rgba(170,55,68, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(170,55,68, 1)' },
{ label: 'Gujarat', data: [90.93, 81.27, 83.46], backgroundColor: 'rgba(165,60,75, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(165,60,75, 1)' },
{ label: 'Haryana', data: [103.24, 120.74, 142.61], backgroundColor: 'rgba(160,65,82, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(160,65,82, 1)' },
{ label: 'Himachal Pradesh', data: [58.91, 80.76, 60.35], backgroundColor: 'rgba(155,70,89, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(155,70,89, 1)' },
{ label: 'Jammu & Kashmir', data: [67.46, 48.16, 70.55], backgroundColor: 'rgba(150,75,96, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(150,75,96, 1)' },
{ label: 'Jharkhand', data: [132.18, 116.95, 140.26], backgroundColor: 'rgba(145,80,103, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(145,80,103, 1)' },
{ label: 'Karnataka', data: [75.84, 66.46, 77.15], backgroundColor: 'rgba(140,85,110, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(140,85,110, 1)' },
{ label: 'Kerala', data: [59.62, 24.78, 42.2], backgroundColor: 'rgba(135,90,117, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(135,90,117, 1)' },
{ label: 'Lakshadweep', data: [0.0, 0.0, 385.6], backgroundColor: 'rgba(130,95,124, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(130,95,124, 1)' },
{ label: 'Madhya Pradesh', data: [144.79, 147.57, 158.57], backgroundColor: 'rgba(125,100,131, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(125,100,131, 1)' },
{ label: 'Maharashtra', data: [62.86, 62.65, 79.18], backgroundColor: 'rgba(120,105,138, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(120,105,138, 1)' },
{ label: 'Manipur', data: [76.37, 51.43, 53.09], backgroundColor: 'rgba(115,110,145, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(115,110,145, 1)' },
{ label: 'Meghalaya', data: [287.34, 189.24, 199.65], backgroundColor: 'rgba(110,115,152, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(110,115,152, 1)' },
{ label: 'Mizoram', data: [114.38, 125.23, 38.94], backgroundColor: 'rgba(105,120,159, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(105,120,159, 1)' },
{ label: 'Nagaland', data: [133.81, 66.67, 101.47], backgroundColor: 'rgba(100,125,166, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(100,125,166, 1)' },
{ label: 'Odisha', data: [161.49, 99.07, 97.83], backgroundColor: 'rgba(95,130,173, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(95,130,173, 1)' },
{ label: 'Puducherry', data: [66.25, 27.22, 9.58], backgroundColor: 'rgba(90,135,180, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(90,135,180, 1)' },
{ label: 'Punjab', data: [147.9, 123.27, 109.71], backgroundColor: 'rgba(85,140,187, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(85,140,187, 1)' },
{ label: 'Rajasthan', data: [93.4, 99.81, 103.57], backgroundColor: 'rgba(80,145,194, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(80,145,194, 1)' },
{ label: 'Sikkim', data: [82.73, 224.78, 328.32], backgroundColor: 'rgba(75,150,201, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(75,150,201, 1)' },
{ label: 'Tamil Nadu', data: [62.77, 49.67, 45.96], backgroundColor: 'rgba(70,155,208, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(70,155,208, 1)' },
{ label: 'Telangana', data: [43.54, 53.25, 83.9], backgroundColor: 'rgba(65,160,215, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(65,160,215, 1)' },
{ label: 'Tripura', data: [135.69, 83.18, 70.77], backgroundColor: 'rgba(60,165,222, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(60,165,222, 1)' },
{ label: 'Uttar Pradesh', data: [147.17, 134.87, 110.89], backgroundColor: 'rgba(55,170,229, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(55,170,229, 1)' },
{ label: 'Uttarakhand', data: [97.15, 113.16, 124.38], backgroundColor: 'rgba(50,175,236, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(50,175,236, 1)' },
{ label: 'West Bengal', data: [97.41, 87.7, 79.31], backgroundColor: 'rgba(45,180,243, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(45,180,243, 1)' }]
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
