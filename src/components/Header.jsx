import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log("User in Header:", user);
  console.log("User in Header:", user?.displayName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log("User is signed in:", user);
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        console.log("User is signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex items-center w-full justify-between p-4 bg-linear-to-b from-black to-transparent  absolute  text-white">
      <img
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
        alt="Netflix Logo"
        className="h-12"
      />
      {user && (
        <div className="flex items-center space-x-4">
          <img
            alt="User Avatar"
            src={user?.photoURL}
            className="h-10 w-10 rounded-full"
          />

          <span className="text-white bg-black font-semibold">
            {user?.displayName}
          </span>
          <button
            className="bg-red-600 px-4 py-2 rounded-md cursor-pointer text-white font-semibold hover:bg-red-700 transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
