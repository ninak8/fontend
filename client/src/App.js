import React from "react";
import "./App.css";
import { Home, Detail, Faqs, Create, Catalogs } from "./pages/index";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import axios from "axios";

axios.defaults.baseURL = "https://back-production-c55d.up.railway.app/";
// axios.defaults.baseURL = "https://localhost:3001/";

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
        <Home />
      </Route>

      <Route
        path="/detail/:id"
        render={({ match }) => <Detail id={match.params.id} />}
      />
      {/* 
      <Route exact path="/form">
        <Create />
      </Route> */}

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
    </div>
  );
}

export default App;
