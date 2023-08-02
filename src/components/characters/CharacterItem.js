//React and Context
import React, { useContext } from "react";
import { Context } from "../../Context";

const CharacterItem = ({ item }) => {
  const { toggleFavorite } = useContext(Context);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" width={218}/>
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>ID:</strong> {item.id}
            </li>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
          </ul>
          <button className="btn" onClick={() => toggleFavorite(item.id)}>
            {item.isFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
