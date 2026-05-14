import LoginHeader from "../LoginHeader/LoginHeader";
import "./Browse.css";

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { user_avatar } from "../../utils/constants";
const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        Navigate("/error");
      });
  };
  return (
    <div className="browserHeader">
      <LoginHeader browse={true} />
      <div className="userSection">
        <img src={user_avatar} />
        <button className="signout" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Browse;
