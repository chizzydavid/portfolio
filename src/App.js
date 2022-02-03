import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
            <About />
            <Skills />
            <Portfolio />
            <Resume />
            <Education />
            <Contact />
            <Footer />
          </Route>  
        </Switch> 
      </Router>
    </div>
  );
};

export default App;

