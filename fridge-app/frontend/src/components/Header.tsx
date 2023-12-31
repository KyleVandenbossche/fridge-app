import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="header-container">
      <div className="menu-container">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link to="/" className="menu__item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipe" className="menu__item">
              Find Recipe
            </Link>
          </li>
          <li>
            <Link to="/fridge" className="menu__item">
              Manage your Fridge
            </Link>
          </li>
        </ul>
      </div>
      <div className="contacts-container">
        <h1 className="logo">Fridge to Table</h1>
        <div>
          Welcome {user?.displayName}{" "}
          <button className="sign-out-button" onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
