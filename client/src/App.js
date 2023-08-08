import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Home, Detail, Faqs, Catalogs, IAM, Map } from "./pages/index";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import { Footer, PreFooter } from "./components";

axios.defaults.baseURL = "https://back-production-c55d.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const eventInput = (setPaging) => {
    let fnResetPages = () => {
      setPaging((p) => (p = 0));
    };
  };

  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>

      <Route exact path="/">
        <Home inputEvent={eventInput} />
      </Route>

      <Route
        path="/detail/:id/:category"
        render={({ match }) => (
          <Detail id={match.params.id} category={match.params.category} />
        )}
      />
      <Route exact path="/faqs">
        <Faqs />
      </Route>
      {/* --------------------- */}
      <Route exact path="/catalogs/:category/:name">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/catalogs/:category">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/iam">
        <IAM />
      </Route>

      <Route exact path="/map">
        <Map />
      </Route>
      {/* <-------- --------> */}
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
