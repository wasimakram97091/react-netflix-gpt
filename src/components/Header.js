import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute py-2 bg-gradient-to-b from-black  flex justify-between items-center z-40">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <>
          <div className="flex items-center justify-between gap-3">
            <img className="h-12 w-12 rounded-full" alt="userIcon" src={user?.photoURL} />
            <button className="font-bold text-white " onClick={logoutHandler}>
              LogOut
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
