import React, { Component } from "react";
import { robots } from "../robots";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  //   onSearchChange = (event) => {
  //     this.setState({ searchfield: event.target.value }, () => {
  //       //console.log(event.target.value);
  //       console.log(this.state.searchfield);
  //     });
  //   };
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;