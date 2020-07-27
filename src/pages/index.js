import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const Container = styled.div`
  margin: 3rem auto;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
`

export default function Home() {
  return (
    <Layout>
      <h1>Hello world! i'm jane's project</h1>
      <Container> I am a container styled with styled components lalallalalallalalalalallalalalalalallalalallalala</Container>
    </Layout>
  )
}

