import React from "react";
import Account from "./Account";
import style from "../.././styles/Nav.module.css";
import logo from "../.././assets/images/logo-bg.png";
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/" className={style.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}