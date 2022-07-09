import React, { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { dispatch } = useContext(AuthContext);

  const logOut = () => {
    signOut(auth).then(() => {
      dispatch({ type: "LOGOUT" });
    });
  };

  return (
    <div>
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
