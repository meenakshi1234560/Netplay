import { useSelector } from "react-redux";
import { login_cover_img } from "../../utils/constants";
import lang from "../../utils/lang";

const GptSearchPage = () => {
  const selectedLang = useSelector((store) => store?.gpt?.lang);
  console.log("ssssssss", selectedLang);
  return (
    <div className="search">
      <img src={login_cover_img} alt="NetFlix Logo" />

      <form>
        <div className="searchBar">
          <input
            className="searchInput"
            type="text"
            placeholder={lang[selectedLang]?.wannaWatch}
          />
          <button className="gptSearchBtn">{lang[selectedLang]?.search}</button>
        </div>
      </form>
    </div>
  );
};
export default GptSearchPage;
