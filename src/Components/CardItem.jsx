import React from "react"

import { Link, Router } from "@reach/router"
import styles from "./CardItem.module.css"

export function CardItem({ cardInfo }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          className={styles.img}
          src={cardInfo.image}
          alt={cardInfo.name}
          width="300px"
          height="200px"
        />
        <p className={styles.text}>{cardInfo.category}</p>
      </div>
      <div>
        <p>{cardInfo.name}</p>
      </div>
      <div className="des">
        <p>{cardInfo.description}</p>
      </div>
      <div>
        <p>{cardInfo.label}</p>
      </div>
      <div>
        <p>{`$${cardInfo.price}`}</p>
      </div>
    </div>
  )
}
