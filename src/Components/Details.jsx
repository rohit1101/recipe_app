import React from "react"
import { getData } from "../api"
import DetailsItem from "./DetailsItem"

export class Details extends React.Component {
  state = {
    details_arr: [],
  }

  async componentDidMount() {
    const data = await getData()
    this.setState({ details_arr: data })
    console.log(data)
  }

  render() {
    const arr = [...this.state.details_arr]
    return (
      <div>
        {arr.map((item) => {
          return (
            item.id === +this.props.detailId && (
              <DetailsItem key={item.id} data={item} />
            )
          )
        })}
      </div>
    )
  }
}

// export function Details(props) {
//   console.log(props.detailId)
//   return (
// <div>
//   <h3>This is from details page..</h3>
// </div>
//   )
// }
