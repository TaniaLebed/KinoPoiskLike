import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundry from "./ErrorBoundry";
import { MainPage, DetailsPage } from "../containers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ErrorBoundry>
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/kinopoisk-like/" component={MainPage} />
            <Route path="/film/:id?" component={DetailsPage} />
            <Route render={() => <h3 className="error">Page not found</h3>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ErrorBoundry>
  );
}

export default App;
