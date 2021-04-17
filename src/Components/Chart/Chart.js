import React from 'react';
import { Chart } from "react-google-charts"; 
import './Chart.css'


const Charts = (props) => {

const label = props.labels
const Temp = props.temp
const chartData = [['Days', 'Temp']]
for (let i = 0; i < label.length; i += 1) {
  if (props.degreeType === 'celsius'){
    chartData.push([label[i], Math.round((Temp[i] - 32) * 5/9)])
  } else {
    chartData.push([label[i], Temp[i]])
  }
      
  }
  
  return (
        <div className='Chart'>
      <Chart
  width={'400px'}
  height={'400px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    chart: {
      title: 'Temperature Predictions',
      },
   animation: {
            duration: 1000,
            easing: 'out',
            startup: true,
          },
          title: 'Weather Forecast',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Temperature Fº/Cº',
      minValue: 0,
    },
    vAxis: {
      title: 'Date',
    },
  }}
  
  // For tests
  rootProps={{ 'data-testid': '2' }}
/></div>)
  }


 

export default Charts