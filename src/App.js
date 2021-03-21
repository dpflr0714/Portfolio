import React from "react"
import './App.css'
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Portfolio}/>
          <Route path="/resume" exact component={Resume}/>
          <Route path="/experience" exact component={Experience}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
