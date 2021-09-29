import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const AllQuotes= React.lazy(()=> import("./Page/AllQuotes"));
const DetailQuote = React.lazy(() => import("./Page/DetilQuote")) ;
const NotFouond = React.lazy(() => import("./Page/NotFouond"));
const NewQuote = React.lazy(() => import("./Page/NewQuote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
