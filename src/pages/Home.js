//React and Context
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
//Components
import Header from "../components/ui/Header";
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/ui/Search";
//Axios
import axios from "axios";
//Styles
import "../styles.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const { items, setItems } = useContext(Context);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Home;
