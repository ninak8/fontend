import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Home, Detail, Faqs, Catalogs, IAM, Map, Sizes } from "./pages/index";
import { Footer, PreFooter, Whatsapp, NavBar } from "./components";
import "./App.css";

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
      <Route exact path="/ayuda/faqs">
        <Faqs />
      </Route>
      {/* --------------------- */}
      <Route exact path="/catalogs/:category/:name">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/catalogs/:category">
        <Catalogs inputEvent={eventInput} />
      </Route>

      <Route exact path="/sobre-mercado-deporte">
        <IAM />
      </Route>

      <Route exact path="/mapa-del-sitio">
        <Map />
      </Route>

      <Route exact path="/gua-de-tallas">
        <Sizes />
      </Route>
      {/* <-------- --------> */}
      <Whatsapp />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
