import React from "react"
import { Card } from "./Components/Card.jsx"
import "./App.css"
import { getData } from "./api"
import "./App.css"
import "./index.css"

export class App extends React.Component {
  state = {
    inputText: "",
    recipe_arr: [],
    filter_arr: [],
  }

  async componentDidMount() {
    let data = await getData()
    this.setState({ recipe_arr: data })
  }

  handleChange = (e) => {
    const recipe_arr = [...this.state.recipe_arr]
    this.setState({ inputText: e.target.value })

    if (e.target.value.trim()) {
      const filtered_arr = recipe_arr.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      this.setState({ filter_arr: filtered_arr })
    }

    if (this.state.inputText === "") {
      this.setState({ filter_arr: [] })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Recipe Finder</h1>
        <label>Search </label>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search Recipe"
        />
        <div>
          {this.state.inputText !== "" ? (
            <Card recipes={this.state.filter_arr} />
          ) : (
            <Card recipes={this.state.recipe_arr} />
          )}
        </div>
        <footer className="foot">
          Made with ❣️by <a href="https://github.com/rohit1101">Cloud_Dev</a>
        </footer>
      </div>
    )
  }
}
