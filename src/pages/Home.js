//React and Context
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import CharacterGrid from "../components/characters/CharacterGrid";
import "../styles.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { items, setItems } = useContext(Context);

  useEffect(() => {
    const fetchItems = async () => {
      const promises = [];
      for (let i = 1; i <= 30; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
      Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
          name: result.name,
          image: result.sprites.other['home']['front_default'],
          id: result.id
        }));
        setItems(pokemon);
        setIsLoading(false);
      });
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Home;
