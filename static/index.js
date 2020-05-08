function updateMetaData17(data) {
    // Reference to Panel element for sample metadata
	var PANEL = document.getElementById("year-2017-metadata");
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
function updateMetaData18(data) {
    // Reference to Panel element for sample metadata
	var PANEL = document.getElementById("year-2018-metadata");
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
function updateMetaData19(data) {
    // Reference to Panel element for sample metadata
	var PANEL = document.getElementById("year-2019-metadata");
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
  
function getData(state) {
    
    var selDistrict = document.getElementById('selDistrict');
	var length = selDistrict.options.length;
	var dist = [];
    for (i = length-1; i >= 0; i--) {
        selDistrict.options[i] = null;
    }
	Plotly.d3.json(`/${state}`, function(error, districtList) {
	    for (var j = 0; j < districtList.length; j++) {
	         var currentOption = document.createElement('option');
			 currentOption.text = districtList[j];
			 currentOption.value = districtList[j];
			 selDistrict.appendChild(currentOption);
			}
			Plotly.d3.json(`/metadata17/${state}/${districtList[0]}`, function(error, metaData) {
				if (error) return console.warn(error);
					updateMetaData17(metaData);
				});
			Plotly.d3.json(`/metadata18/${state}/${districtList[0]}`, function(error, metaData) {
				if (error) return console.warn(error);
					updateMetaData18(metaData);
				});
			Plotly.d3.json(`/metadata19/${state}/${districtList[0]}`, function(error, metaData) {
				if (error) return console.warn(error);
					updateMetaData19(metaData);
				});
	    })
     
	
			   
}
function getOptions() {
    // Grab a reference to the dropdown select element
    var selState = document.getElementById('selState');
	Plotly.d3.json(`/state`, function(error, stateList) {
        for (var i = 0; i < stateList.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = stateList[i];
            currentOption.value = stateList[i];
            selState.appendChild(currentOption);
        }
		getData(stateList[0]);
    })
	
}
function optionChanged(state) {
    // Fetch new data each time a new sample is selected
	getData(state);
}
function distChanged(district, state) {
	Plotly.d3.json(`/metadata17/${state}/${district}`, function(error, metaData) {
		if (error) return console.warn(error);
			updateMetaData17(metaData);
		});
	Plotly.d3.json(`/metadata18/${state}/${district}`, function(error, metaData) {
		if (error) return console.warn(error);
			updateMetaData18(metaData);
		});
	Plotly.d3.json(`/metadata19/${state}/${district}`, function(error, metaData) {
		if (error) return console.warn(error);
			updateMetaData19(metaData);
		});
}
function init() {
    getOptions();
}
// Initialize the dashboard
init();
/**
* BONUS Solution
**/
