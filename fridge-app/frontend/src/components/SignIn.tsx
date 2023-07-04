import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./signin.css";

const SignIn = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h2>Fridge to Table</h2>
      <div className="card">
        <button className="sign-in-button" onClick={signInWithGoogle}>
          Sign in with Google<span className="google-icon"></span>
        </button>
      </div>
    </>
  );
};

export default SignIn;
