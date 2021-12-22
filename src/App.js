import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      monsters: [],
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((err) => console.log(err));
  }
}

export default App;
