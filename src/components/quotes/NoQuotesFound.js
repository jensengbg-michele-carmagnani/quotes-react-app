import classes from "./NoQuotesFound.module.css";
import { Link, useHistory } from "react-router-dom";

const NoQuotesFound = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className="btn" to="/newquote">Add a Quote</Link>
    </div>
  );
};

export default NoQuotesFound;
