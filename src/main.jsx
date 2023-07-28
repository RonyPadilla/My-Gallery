import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Style/index.css'
import User from './Components/User';
import Content from './Components/Content.jsx';
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
