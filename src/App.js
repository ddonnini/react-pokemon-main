//React
import React from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </div>
  );
};

export default App;
