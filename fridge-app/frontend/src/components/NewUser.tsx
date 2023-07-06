import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FridgeContext } from "../context/FridgeContextProvider";

const NewUser = () => {
  const { fridge, createFridge, getFridge } = useContext(FridgeContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="App">
        <h2>Are you a new User?</h2>
        <button onClick={() => createFridge(user!.uid)}>
          <Link to="/fridge">Yes</Link>
        </button>{" "}
        <button onClick={() => getFridge(user!.uid)}>
          <Link to="/fridge">No</Link>
        </button>
      </div>
    </>
  );
};

export default NewUser;
