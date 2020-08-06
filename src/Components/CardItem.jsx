import React from "react"

export function CardItem({ cardInfo }) {
  console.log(cardInfo)
  return (
    <div>
      <p>{cardInfo.category}</p>
      <p>{cardInfo.id}</p>
      <img loading="lazy" src={cardInfo.image} alt="zucchipakoda" />
      <p>{cardInfo.name}</p>
      <p>{cardInfo.description}</p>
      <p>{cardInfo.label}</p>
      <p>{cardInfo.price}</p>
    </div>
  )
}
