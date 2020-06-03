import React from "react";
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
