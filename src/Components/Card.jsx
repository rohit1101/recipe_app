import React from "react"
import { CardItem } from "./CardItem"

export function Card({ recipes }) {
  return (
    <div>
      {recipes.map((item) => {
        return <CardItem cardInfo={item} key={item.id} />
      })}
    </div>
  )
}
