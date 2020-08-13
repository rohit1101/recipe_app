import React from "react"
import { NavBar } from "./NavBar"
import { App } from "./App"
import { Details } from "./Components/Details"
import { Router } from "@reach/router"

export function Route() {
  return (
    <div>
      <NavBar />
      <Router>
        <App path="/" />
        <Details path="/details/:detailId" />
      </Router>
    </div>
  )
}
