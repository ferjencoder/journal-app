

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//import { ThemeProvider } from '@mui/material/styles';

import { JournalApp } from './JournalApp'
import './style.css'


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(

  <React.StrictMode>

    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>

  </React.StrictMode>,

)
