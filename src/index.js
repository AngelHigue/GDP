import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './app/Router'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)
