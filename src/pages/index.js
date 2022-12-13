import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <ul>
        <li><Link to="/one-product">One Product</Link></li>
        <li><Link to="/two-product">Two Product</Link></li>
      </ul>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
