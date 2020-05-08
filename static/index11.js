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
  
  datasets: [{ label: 'A & N Islands', data: [21.16, 11.27, 23.29], backgroundColor: 'rgba(220,5,-2, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(220,5,-2, 1)' },
{ label: 'Andhra Pradesh', data: [10.89, 10.94, 12.4], backgroundColor: 'rgba(215,10,5, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(215,10,5, 1)' },
{ label: 'Arunachal Pradesh', data: [5.79, 5.73, 4.18], backgroundColor: 'rgba(210,15,12, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(210,15,12, 1)' },
{ label: 'Assam', data: [21.11, 20.42, 20.69], backgroundColor: 'rgba(205,20,19, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(205,20,19, 1)' },
{ label: 'Bihar', data: [6.38, 5.66, 4.95], backgroundColor: 'rgba(200,25,26, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(200,25,26, 1)' },
{ label: 'Chandigarh', data: [46.8, 53.94, 46.97], backgroundColor: 'rgba(195,30,33, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(195,30,33, 1)' },
{ label: 'Chhattisgarh', data: [17.96, 17.4, 20.34], backgroundColor: 'rgba(190,35,40, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(190,35,40, 1)' },
{ label: 'Dadra & Nagar Haveli', data: [27.88, 27.65, 25.57], backgroundColor: 'rgba(185,40,47, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(185,40,47, 1)' },
{ label: 'Daman & Diu', data: [7.38, 11.4, 9.57], backgroundColor: 'rgba(180,45,54, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(180,45,54, 1)' },
{ label: 'Delhi', data: [15.4, 16.15, 17.55], backgroundColor: 'rgba(175,50,61, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(175,50,61, 1)' },
{ label: 'Goa', data: [5.66, 8.48, 6.03], backgroundColor: 'rgba(170,55,68, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(170,55,68, 1)' },
{ label: 'Gujarat', data: [22.6, 17.96, 17.55], backgroundColor: 'rgba(165,60,75, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(165,60,75, 1)' },
{ label: 'Haryana', data: [10.18, 20.08, 23.43], backgroundColor: 'rgba(160,65,82, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(160,65,82, 1)' },
{ label: 'Himachal Pradesh', data: [11.23, 13.86, 16.75], backgroundColor: 'rgba(155,70,89, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(155,70,89, 1)' },
{ label: 'Jammu & Kashmir', data: [8.12, 7.59, 8.17], backgroundColor: 'rgba(150,75,96, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(150,75,96, 1)' },
{ label: 'Jharkhand', data: [6.26, 6.74, 7.91], backgroundColor: 'rgba(145,80,103, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(145,80,103, 1)' },
{ label: 'Karnataka', data: [12.48, 11.12, 11.44], backgroundColor: 'rgba(140,85,110, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(140,85,110, 1)' },
{ label: 'Kerala', data: [5.26, 3.31, 3.1], backgroundColor: 'rgba(135,90,117, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(135,90,117, 1)' },
{ label: 'Lakshadweep', data: [17.92, 12.96, 6.43], backgroundColor: 'rgba(130,95,124, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(130,95,124, 1)' },
{ label: 'Madhya Pradesh', data: [23.31, 24.98, 24.98], backgroundColor: 'rgba(125,100,131, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(125,100,131, 1)' },
{ label: 'Maharashtra', data: [11.35, 11.15, 10.41], backgroundColor: 'rgba(120,105,138, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(120,105,138, 1)' },
{ label: 'Manipur', data: [5.57, 2.87, 3.48], backgroundColor: 'rgba(115,110,145, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(115,110,145, 1)' },
{ label: 'Meghalaya', data: [29.31, 22.69, 29.24], backgroundColor: 'rgba(110,115,152, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(110,115,152, 1)' },
{ label: 'Mizoram', data: [21.86, 19.26, 20.48], backgroundColor: 'rgba(105,120,159, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(105,120,159, 1)' },
{ label: 'Nagaland', data: [7.99, 8.24, 7.09], backgroundColor: 'rgba(100,125,166, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(100,125,166, 1)' },
{ label: 'Odisha', data: [23.57, 21.75, 20.15], backgroundColor: 'rgba(95,130,173, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(95,130,173, 1)' },
{ label: 'Puducherry', data: [11.36, 11.07, 7.18], backgroundColor: 'rgba(90,135,180, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(90,135,180, 1)' },
{ label: 'Punjab', data: [10.39, 8.52, 7.8], backgroundColor: 'rgba(85,140,187, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(85,140,187, 1)' },
{ label: 'Rajasthan', data: [13.54, 22.41, 21.03], backgroundColor: 'rgba(80,145,194, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(80,145,194, 1)' },
{ label: 'Sikkim', data: [22.1, 19.75, 14.45], backgroundColor: 'rgba(75,150,201, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(75,150,201, 1)' },
{ label: 'Tamil Nadu', data: [8.48, 7.8, 11.32], backgroundColor: 'rgba(70,155,208, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(70,155,208, 1)' },
{ label: 'Telangana', data: [4.94, 6.78, 5.41], backgroundColor: 'rgba(65,160,215, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(65,160,215, 1)' },
{ label: 'Tripura', data: [17.21, 13.97, 15.9], backgroundColor: 'rgba(60,165,222, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(60,165,222, 1)' },
{ label: 'Uttar Pradesh', data: [4.28, 3.39, 3.06], backgroundColor: 'rgba(55,170,229, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(55,170,229, 1)' },
{ label: 'Uttarakhand', data: [6.26, 8.1, 8.78], backgroundColor: 'rgba(50,175,236, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(50,175,236, 1)' },
{ label: 'West Bengal', data: [20.04, 19.23, 17.94], backgroundColor: 'rgba(45,180,243, 1)', borderWidth: 0, fill: false, borderColor: 'rgba(45,180,243, 1)' }]
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
