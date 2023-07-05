import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./signin.css";

const SignIn = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="home-page-div">
      <img className='fridge-to-table-icon' src={ require('./fridge-to-table.PNG')} height="319" />
      <div className="card">
        
        <button className="sign-in-button" onClick={signInWithGoogle}>
          Sign in with Google<span className="google-icon"></span>
        </button>
      </div>
      </div>
    </>
  );
};

export default SignIn;
