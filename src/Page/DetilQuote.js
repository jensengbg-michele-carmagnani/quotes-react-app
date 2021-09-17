import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Michele", text: " Learning React is fun" },
  { id: "q2", author: "Noah", text: " Lerning to flay" },
];
const DetilQuote = () => {
  const params = useParams();
  const Id = params.quoteId;

  const quote = DUMMY_QUOTES.find((q) => q.id === Id);
  if (!quote) {
    return <p>quote not found</p>;
  }

  return (
    <Fragment>
      <h1>Detail quote</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quote/${Id}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default DetilQuote;
