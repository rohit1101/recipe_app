import React from "react"

export function CardItem({ cardInfo }) {
  console.log(cardInfo)
  return (
    <div>
      <p>{cardInfo.id}</p>
      <p>{cardInfo.name}</p>
      <img src={cardInfo.image} alt="zucchipakoda" />
    </div>
  )
}
