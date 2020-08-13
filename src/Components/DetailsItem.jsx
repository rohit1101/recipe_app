import React from "react"
import styles from "./DetailsItem.module.css"

function DetailsItem({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>{data.name}</h1>
        <h2>Type: {data.category}</h2>
        <h2>{`$${data.price}`}</h2>
        <p>{data.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci
          recusandae soluta quam consequatur veniam repellendus, ipsam nisi
          temporibus cupiditate neque? Fugiat iste accusantium eveniet
          reprehenderit praesentium est alias error harum molestiae aspernatur,
          natus cumque nemo sed laborum explicabo maiores quo? Aliquid aliquam
          iusto sunt possimus corporis dolorem sapiente optio!
        </p>
      </div>
    </div>
  )
}

export default DetailsItem
