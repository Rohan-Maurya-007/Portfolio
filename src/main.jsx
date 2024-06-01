import React from 'react'
import ReactDOM from 'react-dom/client'
import Intro from './components/Intro'
import Body from './components/Body'
import Home from './components/Home'
import Applayout from './components/AppLayout'

import Contact from './components/Contact'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Applayout></Applayout>
  </React.StrictMode>,
)
