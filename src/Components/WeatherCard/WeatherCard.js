import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {format, fromUnixTime} from 'date-fns';



const useStyles = makeStyles({
  root: {
    minWidth: 150,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginRight: 100
    
  },
});

const WeatherCard =  (props) =>  {


  const classes = useStyles();
  const result = fromUnixTime(props.weather.dt)
  
  
  const fahrenheit = Math.round(props.weather.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)
  const fahrenheit_max = Math.round(props.weather.main.temp_max)
  const celsius_max = Math.round((fahrenheit_max - 32) * 5/9)
  const fahrenheit_min = Math.round(props.weather.main.temp_min)
  const celsius_min = Math.round((fahrenheit_max - 32) * 5/9)
  console.log(props.weather)
  





  return (
    
<div>

   <li>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         <strong>Temp:</strong> {props.degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}
        </Typography>
        <Typography variant="h6" component="h3">
          <strong>Date:</strong> {format(
           result,
            'PPP'
        )}  
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Temp Max: {props.degreeType === "celsius" ? celsius_max + "°C" : fahrenheit_max + "°F"}
          <br/>
          Temp Min: {props.degreeType === "celsius" ? celsius_min + "°C" : fahrenheit_min + "°F"}
      
        </Typography>
        <Typography variant="body2" component="p">
          { props.desc.map(item => {
            return item.main
            })}
          <br />
         
        </Typography>
      </CardContent>
       
    </Card>
    </li>
   
    </div>
  );
}

export default WeatherCard;
