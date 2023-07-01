import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

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
            <a className="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Add Items to Fridge
            </a>
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
        {user ? (
          <div>
            Welcome {user?.displayName}{" "}
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        )}
      </div>
    </div>
  );
}
