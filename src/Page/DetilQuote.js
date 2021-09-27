import React, { Fragment, useEffect } from "react";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import  LoadingSpinner from '../components/UI/LoadingSpinner'
const DetilQuote = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(params);
  const {quoteId} = params;

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest]);

  if (status === "pending") {
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }
  if (error) {
    return <p className="centered">{error}</p>
 }
  if (!loadedQuotes.text) {
    return <p>quote not found</p>;
  }

  return (
    <Fragment>
      <h1>Detail quote</h1>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default DetilQuote;
