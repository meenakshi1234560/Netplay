import { netflix_logo } from "../../utils/constants";
import "./LoginHeadder.css";
const LoginHeader = ({ browse }) => {
  return (
    <div className={`LoginHeader ${browse ? "LoginHeader--browse" : ""}`}>
      <img src={netflix_logo} alt="Logo" />
    </div>
  );
};
export default LoginHeader;
