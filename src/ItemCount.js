import React from "react";

class ItemCount extends React.Component {
  render() {
    return <p>You have {this.props.count} items left on your todo list</p>;
  }
}

export default ItemCount;
