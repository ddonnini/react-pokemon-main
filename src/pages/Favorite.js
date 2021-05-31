//React and Context
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
//Components
import CharacterItem from "../components/characters/CharacterItem";

const Favorite = () => {
  const { favorited, setButtonClicked } = useContext(Context);

  return favorited.length > 0 ? (
    <div className="fav-container">
      <h1 className="favorite-text">These are your favorite characters</h1>
      <section className="cards">
        {favorited.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
      <Link to="/">
        <button className="fav-character-on">Go back to Home Page </button>
      </Link>
    </div>
  ) : (
    <div className="empty-favorite">
      <h2 className="favorite-text">
        You don't have any favorite character yet!{" "}
      </h2>
      <Link to="/">
        <button
          className="fav-character"
          onClick={() => setButtonClicked(false)}
        >
          Go back to Home Page{" "}
        </button>
      </Link>
    </div>
  );
};

export default Favorite;
