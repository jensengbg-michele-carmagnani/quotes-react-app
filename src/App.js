import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Page/AllQuotes";
import DetailQuote from "./Page/DetilQuote";
import NewQuote from "./Page/NewQuote";
import Layout from "./components/layout/Layout";

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
        <Route path="/allquotes/:quoteId">
          <DetailQuote />
        </Route>
        <Route path="/newquote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
