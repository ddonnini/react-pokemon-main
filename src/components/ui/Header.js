//React and Context
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
//Logo
import logo from "../../img/logo.png";
//Styles
import "../../styles.css";

const Header = () => {
  const { buttonClicked, setButtonClicked } = useContext(Context);
  const displayButton = buttonClicked ? "none" : "block";

  return (
    <header>
      <div className="center">
        <img src={logo} alt="" />
      </div>
      <Link to="/favorite">
        <button
          className="fav-character"
          onClick={() => setButtonClicked(true)}
          style={{ display: `${displayButton}` }}
        >
          Favorite Pokemon
        </button>
      </Link>
    </header>
  );
};
export default Header;
