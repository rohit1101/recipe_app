import React from "react"
import { Card } from "./Components/Card.jsx"
import "./App.css"

export class App extends React.Component {
  state = {
    inputText: "",
    recipe_arr: [],
  }

  async componentDidMount() {
    const res = await fetch(`http://starlord.hackerearth.com/recipe`)
    const data = await res.json()
    this.setState({ recipe_arr: data })
  }

  render() {
    return (
      <div>
        <Card recipes={this.state.recipe_arr} />
      </div>
    )
  }
}
