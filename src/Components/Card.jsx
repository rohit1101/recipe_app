import React from "react"
import { CardItem } from "./CardItem"
import styles from "./Card.module.css"

export function Card({ recipes }) {
  return (
    <div className={styles.container}>
      {recipes.map((item) => {
        return <CardItem cardInfo={item} key={item.id} />
      })}
    </div>
  )
}
