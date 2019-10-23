import React, { Component } from "react";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem"; 
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {text: "do the dishes", completed: true, date: "2019-10-21", id: 1},
      { text: "walk the cat", completed: false, date: "2019-10-21", id: 2},
      { text: "buy oat milk", completed: false, date: "2019-10-21", id: 3},
      { text: "print pictures", completed: true, date: "2019-10-21", id: 4},
      { text: "hoover the cat's bed", completed: false, date: "2019-10-21", id: 5},


    ]

  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddItem />
        <ItemCount count={this.state.tasks.length} />
       
        {this.state.tasks.map(task => {
          return <Item text={task.text} completed={task.completed} key={task.id}/>

        })}
        
      </div>
    );
  }
}

export default App;
