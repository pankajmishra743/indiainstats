function myupdateMetaData(data) {
    // Reference to Panel element for sample metadata
    var PANEL = document.getElementById("country-metadata");
    // Clear any existing metadata
    PANEL.innerHTML = '';
    // Loop through all of the keys in the json response and
    // create new metadata tags
    for(var key in data) {
        h4tag = document.createElement("h4");
        h4Text = document.createTextNode(`${key}: ${data[key]}`);
        h4tag.append(h4Text);
        PANEL.appendChild(h4tag);
    }
}
  
function mygetData(state) {
    var dates;
    // Use a request to grab the json data needed for all charts
    /* Plotly.d3.json(`/wmetadata/${country}`, function(error, wmetaData) {
        if (error) return console.warn(error);
        myupdateMetaData(wmetaData);
        
    }); */
    
    Plotly.d3.json(`/MMR/india`, function(error, IndiaMMRData) {
        if (error) return console.warn(error);
		Plotly.d3.json(`/MMR/${state}`, function(error, StateMMRData) {
			if (error) return console.warn(error);
			Graph_MMR(IndiaMMRData, StateMMRData, state);
			
		});
    });
	
	Plotly.d3.json(`/IMR/india`, function(error, IndiaIMRData) {
        if (error) return console.warn(error);
		Plotly.d3.json(`/IMR/${state}`, function(error, StateIMRData) {
			if (error) return console.warn(error);
			Graph_IMR(IndiaIMRData, StateIMRData, state);
			
		});
    });
	
	Plotly.d3.json(`/GDP/india`, function(error, IndiaGDPData) {
        if (error) return console.warn(error);
		Plotly.d3.json(`/GDP/${state}`, function(error, StateGDPData) {
			if (error) return console.warn(error);
			Graph_GDP(IndiaGDPData, StateGDPData, state);
			
		});
    });
    
}
function mygetOptions() {
    var selState = document.getElementById('wselDataset');
	Plotly.d3.json(`/state`, function(error, stateList) {
        for (var i = 0; i < stateList.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = stateList[i];
            currentOption.value = stateList[i];
            selState.appendChild(currentOption);
        }
		mygetData(stateList[0]);
    })
}
function myoptionChanged(state) {
    mygetData(state);
}

function init() {
    mygetOptions();
}
// Initialize the dashboard
init();
/**
* BONUS Solution
**/
