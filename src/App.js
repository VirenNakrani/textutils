// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//able to use this app.import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App()
{
  const [mode, setMode] = useState('light'); // dark mode enalbed or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

const toggleMode = ()=>{
  if(mode === 'light'){
  setMode ('dark');
  document.body.style.backgroundColor = '#1d153e';
  showAlert("Dark Mode Has Been Enabled", "Success");
    // document.title = 'Textutils - Dark Mode';
    // setInterval(() => {
    //   document.title = 'Textutils is Amezing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install Textutils Now';
    // }, 1500);
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled", "Success");
  //  document.title = 'Textutils - Light Mode';
  }
}
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
      
      <div className="container my-3">
      <Switch>
          <Route path="/">
            <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
      </Switch>

      </div>
      </Router>
      
    </>

  );
}

export default App;
