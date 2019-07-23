import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {getCurrencyOptions} from './Utils'
import Converter from './Converter';
import RatesResult from './RatesResult'
import {getRate} from './api'

const  Main = () => {
    const [currency,setCurrency] = useState("EUR") 
    const [newCurrency,setNewCurrency] = useState("")
    const [manyValue,setManyValue] = useState("")
    const [rates,setRates] = useState(0)
 
    const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  const handleChangeNew = (event) => {
    setNewCurrency(event.target.value);
  };
  const handleChangeMany= (event) => {
    setManyValue(event.target.value);
  };
  
  const isDisableConvert = () => {
      return currency ==="" ||
       newCurrency === "" ||
        manyValue === ""
  }

  const findCorrectRate=(props)=>{
    const rate = props.rates[newCurrency]
    setRates(rate)
  }

  const sendConvert = () => {
    getRate(currency,findCorrectRate)
  };

    return (
    <React.Fragment>
        <form>
            <TextField
                select
                label="Current"
                value={currency}
                onChange={handleChange}
                margin="normal"
                >
                {getCurrencyOptions()}
            </TextField>

            <TextField
                label="Value"
                margin="normal"
                type="number"
                value={manyValue}
                onChange={handleChangeMany}
                required
            />

            <TextField
                id="standard-select-currency"
                select
                label="Convert to"
                value={newCurrency}
                onChange={handleChangeNew}
                helperText="Please select your new currency"
                margin="normal"
                required
                >
                {getCurrencyOptions(currency)}
            </TextField>
        </form>
        <Converter disabled={isDisableConvert()} onClick={sendConvert}/>
        <RatesResult many={manyValue} rates={rates}/>

    </React.Fragment>
);
}

export default Main;