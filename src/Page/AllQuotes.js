import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const Allquotes = () => {

  const DUMMY_QUOTES = [
    { id: "q1", author: "Michele", text: " Learning React is fun" },
    { id: "q2", author: "Noah", text: " Lerning to flay" },
  ];

  return <QuoteList quotes={DUMMY_QUOTES}/>
 
}

export default Allquotes
