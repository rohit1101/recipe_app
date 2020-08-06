import React from "react"
// import { Details } from "./Details.jsx"

export function CardItem({ cardInfo }) {
  return (
    <div>
      <p>{cardInfo.category}</p>
      <p>{cardInfo.id}</p>
      <img loading="lazy" src={cardInfo.image} alt={cardInfo.name} />
      <p>{cardInfo.name}</p>
      <p>{cardInfo.description}</p>
      <p>{cardInfo.label}</p>
      <p>{cardInfo.price}</p>
    </div>
  )
}
