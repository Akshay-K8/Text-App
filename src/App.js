import  './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#060038';
     showAlert("Dark mode has been enabled","Success");
     document.title = "Text App - Dark Mode"

     /*setInterval(() => {
      document.title = "Text App is Amazing Mode"
     }, 2000);

     setInterval(() => {
      document.title = "Install Text App Now"
     }, 1500);*/
  }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","Success");
    document.title = "Text App - Light Mode"
  }
  }
  return(
    <>
  {/*<Router>*/}
    <Navbar title="Text Apps" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Switch>*/}
      {/*  /Users --> Component -1 
          /users/home --> Component -2 
          In this condition react will use partial matching and we can't get 2nd component that why we use exact word in path 
          */}
          {/*<Route exact path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </Route>
        <Route exact path="/">*/}
              <TextForm  showAlert={showAlert} heading="Enter The Text To Analyze Below:-" mode={mode}/>
          {/*</Route>
    </Switch>*/}
   </div>
  { /*</Router>*/}
   </>  
   );

}


export default App;
