import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/allquotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/newquote" activeClassName={classes.active}>
              New quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
