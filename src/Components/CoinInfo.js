import { ThemeContext } from '@emotion/react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinInfo = ({coins}) => {
const [historicalData, sethistoricalData] = useState();
const [days, setdays] = useState(1);

const {currency} = CryptoState();

const fetchHisoricData = async() =>{
  const {data} = await axios.get(HistoricalChart(coins.id,days,currency))
  sethistoricalData(data.prices);
}

useEffect(() => {
  fetchHisoricData();
}, [currency,days]);

const darkTheme = createTheme({
  palette:{
      primary:{
          main:"#fff",
      },
      type:"dark",
  }
})

  return (
    <ThemeProvider theme={darkTheme}>
        
    </ThemeProvider>
  )
}

export default CoinInfo