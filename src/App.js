import { useState } from 'react';
import "react-color-palette/lib/css/styles.css";
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';

import TextForm from './Components/TextForm';
import {
  Routes,
  Route, HashRouter
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const toggleMode = (event) => {
    
    
    let id= event.target.id
    
    if(id === 'dark_mode' && mode !== 'dark'){
      setMode('dark')
      document.body.style.backgroundColor = '#002244'
      displayAlert('success', 'Dark Mode Enabled')
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      displayAlert('success', 'Light Mode Enabled')
    }
  }

  const [alert, setAlert] = useState(null)

  function displayAlert(type,msg){
      setAlert({
        type: type,
        msg: msg
      })
      setTimeout(displayAlert, 3000);
  }


  return (

      <HashRouter basename="/">
        <div className="App">
          <Navbar title= "Text Utils" home = "Home" mode={mode} toggle={toggleMode}/>
          <Alert alert= {alert}/>
          <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={<TextForm heading= "Count words, characters, change cases, remove spaces..." mode={mode} displayAlert= {displayAlert}/>} />
              
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
