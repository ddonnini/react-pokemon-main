//React
import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [favorited, setFavorited] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleFavorite = (id) => {
    const updatedArr = items.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setItems(updatedArr);
    const favoritedArr = updatedArr.filter((item) => item.isFavorite === true);
    setFavorited(favoritedArr);
  };

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        favorited,
        toggleFavorite,
        buttonClicked,
        setButtonClicked,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
