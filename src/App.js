import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio"
import Resume from "./Components/Resume"
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <div className="App">

      <Router>

        <Switch>
          <Route exact path="/">

            <Navbar />
            <Header />
            <About/>
            <Resume /> 
            <Portfolio /> 
            <Footer/>

          </Route>  
        </Switch> 

      </Router>
    </div>
  );
};

export default App;
