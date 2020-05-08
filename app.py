
from flask import Flask, jsonify, render_template, request, flash, redirect
from pandasql import sqldf

import pandas as pd
import numpy as np
import io
import requests

df = pd.read_csv("processedData.csv")
df_State = pd.read_csv("All State.csv")
df_India = pd.read_csv("All India.csv")
df_AllIndiaABY = pd.read_csv("All India ABY.csv")
df_AllIndianonABY = pd.read_csv("All India nonABY.csv")

app = Flask(__name__)
@app.route("/")
def index():
    return render_template("myindex.html")
    
@app.route("/stateAnalysis")
def index1():
    return render_template("index.html") 

@app.route("/AllIndia")
def AllIndia():
    return render_template("AllIndia.html") 

@app.route("/AllIndiaIMRMMR")
def AllIndiaIMRMMR():
    return render_template("AllIndia_ABY_nonABY.html") 

@app.route("/AllIndiaIMRMMRStates")
def AllIndiaIMRMMRStates():
    return render_template("AllIndia_IMR.html") 
	

@app.route('/state')
def state_names():
    q="SELECT DISTINCT State FROM df"
    pysqldf = lambda q: sqldf(q, globals())
    a_df = pysqldf(q)
    return jsonify(list(a_df.State))

    
@app.route('/<state>')
def state_district(state):
    sf = df[df["State"] == state].District
    sf = np.array(sf) 
    sf = np.unique(sf)
    return jsonify(list(sf))

@app.route('/metadata17/<state>/<district>')
def district_detail_2017(state,district):
    district_metadata = {}
    district_metadata['MMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2017)]['MMR'].to_string(index=False)
    district_metadata['IMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2017)]['IMR'].to_string(index=False)
    district_metadata['GDP Per Capita'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2017)]['GDP_PC'].to_string(index=False)
    
    if (df[(df["State"]==state) & (df['District']==district) & (df["Year"]==2017)]['ABY'].astype(int).to_string(index=False).replace(' ','') == "1"):
        district_metadata['ABY Status'] = "Implemented"
    else:
        district_metadata['ABY Status'] = "Not Implemented"
    return jsonify(district_metadata)
    
@app.route('/metadata18/<state>/<district>')
def district_detail_2018(state, district):
    district_metadata = {}
    district_metadata['MMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2018)]['MMR'].to_string(index=False)
    district_metadata['IMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2018)]['IMR'].to_string(index=False)
    district_metadata['GDP Per Capita'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2018)]['GDP_PC'].to_string(index=False)
    
    if (df[(df["State"]==state) & (df['District']==district) & (df["Year"]==2018)]['ABY'].astype(int).to_string(index=False).replace(' ','') == "1"):
        district_metadata['ABY Status'] = "Implemented"
    else:
        district_metadata['ABY Status'] = "Not Implemented"
    return jsonify(district_metadata)

@app.route('/metadata19/<state>/<district>')
def district_detail_2019(state, district):
    district_metadata = {}
    district_metadata['MMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2019)]['MMR'].to_string(index=False)
    district_metadata['IMR'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2019)]['IMR'].to_string(index=False)
    district_metadata['GDP Per Capita'] = df[(df["State"]==state) & (df["District"]==district) & (df["Year"]==2019)]['GDP_PC'].to_string(index=False)
    
    if (df[(df["State"]==state) & (df['District']==district) & (df["Year"]==2019)]['ABY'].astype(int).to_string(index=False).replace(' ','') == "1"):
        district_metadata['ABY Status'] = "Implemented"
    else:
        district_metadata['ABY Status'] = "Not Implemented"
    return jsonify(district_metadata)    

  
@app.route('/MMR/india')
def indiaMMR():
    return jsonify(list(df_India['MMR']))
    
@app.route('/IMR/india')
def indiaIMR():
    return jsonify(list(df_India['IMR']))

@app.route('/GDP/india')
def indiaGDP():
    return jsonify(list(df_India['GDP_PC']))
    

@app.route('/MMR/<state>')
def stateMMR(state):
    return jsonify(list(df_State[df_State['State']==state]['MMR']))
    
@app.route('/IMR/<state>')
def stateIMR(state):
    return jsonify(list(df_State[df_State['State']==state]['IMR']))
    
@app.route('/GDP/<state>')
def stateGDP(state):
    return jsonify(list(df_State[df_State['State']==state]['GDP_PC']))
    
@app.route('/AllIndiaIMRABY')
def AllIndiaIMRABY():
    return jsonify(list(df_AllIndiaABY['IMR']))
    
@app.route('/AllIndiaMMRABY')
def AllIndiaMMRABY():
    return jsonify(list(df_AllIndiaABY['MMR']))


@app.route('/AllIndiaIMRnonABY')
def AllIndiaIMRnonABY():
    return jsonify(list(df_AllIndianonABY['IMR']))
    
@app.route('/AllIndiaMMRnonABY')
def AllIndiaMMRnonABY():
    return jsonify(list(df_AllIndianonABY['MMR']))
    

if __name__ == "__main__":
    app.run(debug=True)
   
    