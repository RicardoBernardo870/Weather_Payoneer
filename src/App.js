import React, {Component} from 'react';
import WeatherCards from './Components/WeatherCards/WeatherCards'
import CheckBox from './Components/CheckBox/CheckBox'
import './App.css';
import Charts from './Components/Chart/Chart';
import CircularProgress from '@material-ui/core/CircularProgress';



class App extends Component {
  constructor(){
    super()
    this.state={
      weather: [],
      loading: true,
      degreeType: "fahrenheit",
      temp_max: null,
      labels: null,
      
    }
  }

  updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value
    })
  }


  

  componentDidMount(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
      .then(response =>{
        return response.json()
       })
      .then(data => {
              
            let days = data.list
            let chartData = []
            let labels = [];
            let temp_max = [];
            let dt; 
            for(let i = 0; i<data.list.length; i++){
                dt = data.list[i];
                let date_ = dt.dt_txt.split(' ')[0];
                    if(!labels.includes(date_) && dt.dt_txt.split(' ')[1] === '18:00:00'){
                    
                    labels.push(date_);
                    temp_max.push(dt.main['temp']);
                   
                  
                    
                  }
                 
            } 
           chartData.push(labels, temp_max)
            if(labels.length !== temp_max.length){
              labels.shift();
            }
           
         
         this.setState({
          weather: days,
          temp_max: temp_max,
          labels: labels,
          ChartData: chartData,
          loading:false,
         
        })
      })
      .catch(error =>{
        console.log('Error fetching and parsing data',error)
      })
  }
  
render() {
  
return (
    <div className="App">
     {
            (this.state.loading)
            ?
            <div className='loader'><CircularProgress /></div>
             
            : 
            <main>
            <div>
                <CheckBox degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
            </div>
            <div>
           
                <WeatherCards degreeType={this.state.degreeType} data={this.state.weather} />
            
            </div>
         
            <div></div>
            <div >
                 <Charts temp={this.state.temp_max} labels={this.state.labels} degreeType={this.state.degreeType} />
            </div>
          </main>
          
          }
    </div>
  );
  }
}

export default App;
