import React, { Component } from "react";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AddItem />
        <ItemCount count={6} />
        <Item text="buy bin liners" completed={true} />
        <Item text="walk the cat" completed={false} />
        <Item text="brush the cat" quantity={5} completed={false} />
      </div>
    );
  }
}

export default App;
