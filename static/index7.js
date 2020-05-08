function mygetOptions() {
    Plotly.d3.json(`/AllIndiaIMRABY`, function(error, AIIMRABY) {
        if (error) return console.warn(error);
		Plotly.d3.json(`/AllIndiaIMRnonABY`, function(error, AIIMRnonABY) {
			if (error) return console.warn(error);
			Graph_IMR_India(AIIMRABY, AIIMRnonABY);
			
		});
    });
	
	Plotly.d3.json(`/AllIndiaMMRABY`, function(error, AIMMRABY) {
        if (error) return console.warn(error);
		Plotly.d3.json(`/AllIndiaMMRnonABY`, function(error, AIMMRnonABY) {
			if (error) return console.warn(error);
			Graph_MMR_India(AIMMRABY, AIMMRnonABY);
			
		});
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
