import React,{Fragment} from 'react'
import{useParams, Route, Link} from 'react-router-dom'
import Comments from '../components/comments/Comments'
const DetilQuote = () => {

  const params = useParams()
  const Id = params.quoteId

  return (
    <Fragment>
      <h1>Detail quote</h1>
      <Link to={`/allquotes/${Id}/comments`}>
      <p>{ Id }</p>
      </Link>
      <Route path={`/allquotes/${Id}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  )
}

export default DetilQuote
