import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckBox = (props) => {
    return (
        <form>
            <RadioGroup style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 'auto', width: '500px', flexFlow:'wrap'}}  row={true} defaultValue="fahrenheit" aria-label="temperature" name="customized-radios">
            <FormControlLabel value="celsius" control={<Radio color='primary'/>} label="Celsius"  checked={props.degreeType === "celsius"}
        onChange={props.updateForecastDegree} />
            <FormControlLabel value="fahrenheit" control={<Radio color='primary' />} label="Fahrenheit" checked={props.degreeType === "fahrenheit"}
        onChange={props.updateForecastDegree}/>
           </RadioGroup>
        </form>
    )
}

export default CheckBox;