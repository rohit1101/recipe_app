import React from "react"
import { Link } from "@reach/router"

export function NavBar() {
  return (
    <nav>
      <p>
        <Link className="p" to="/">
          🏡
        </Link>
      </p>
    </nav>
  )
}
