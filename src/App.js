import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Page/AllQuotes";
import DetailQuote from "./Page/DetilQuote";
import NewQuote from "./Page/NewQuote";
import Layout from "./components/layout/Layout";
import NotFouond from "./Page/NotFouond";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allquotes" />
        </Route>
        <Route path="/allquotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quote/:quoteId">
          <DetailQuote />
        </Route>
        <Route path="/newquote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFouond />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
