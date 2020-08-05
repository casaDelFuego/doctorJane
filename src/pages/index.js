import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"


const Container = styled.div`
  margin: 3rem auto;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
`

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hello world! i'm jane's project</h1>
      <p>kek {data.allContentfulPainting.edges[0].node.title}</p>
      <img src={data.allContentfulPainting.edges[0].node.image.fluid.src} alt="rose pic" />
      <Container> I am a container styled with styled components lalallalalallalalalalallalalalalalallalalallalala</Container>
    </Layout>
  )
}

export const query = graphql`
  query {
        allContentfulPainting{
          edges{
            node{
              title
              size
              year
              image{
                fluid{
                  src
                }
              }        
            }
          }
        }
      }
`

