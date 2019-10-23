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
        <Item text="wine" quantity={4} bought={true} />
        <Item text="cheese" quantity={10} bought={false} />
        <Item text="biscuits" quantity={5} bought={false} />
      </div>
    );
  }
}

export default App;
