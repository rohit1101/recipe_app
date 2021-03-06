import React from "react"
import { Link } from "@reach/router"
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
      <div className={styles.name}>
        <p>{cardInfo.name}</p>
      </div>
      <div className={styles.des}>
        <p>{cardInfo.description}</p>
      </div>
      <div className={styles.label}>
        <p>{cardInfo.label}</p>
      </div>
      <div className={styles.price}>
        <p>{`$${cardInfo.price}`}</p>
      </div>
      <h3>
        <Link className={styles.p} to={`details/${cardInfo.id}`}>
          Details
        </Link>
      </h3>
    </div>
  )
}
