import LoginHeader from "../LoginHeader/LoginHeader";
import "./Browse.css";

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
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
        <img src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWpJNRgiXm3RoNC6je8kELaOVH7MG_nZuuyJKeC8QOAyB6rij639Z3gcxi_y6mU5njsrGEsPcWjH9RMvSr8BgrD6o15aWXk.png?r=bd7" />
        <button className="signout" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Browse;
