import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Importing Local components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing Local Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />

          <Redirect to="/home" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
