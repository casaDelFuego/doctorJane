import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Page404 () {
  return (
    <Layout>
      <h1>Sorry this page not found</h1>
      <Link to="/">Go back</Link>
    </Layout>
    )
}