import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"


const Container = styled.div`
display: grid;
grid-template-columns: 140px 136px auto auto auto auto auto auto auto auto auto auto 136px 140px;
grid-template-rows: 100px 100px 100px 750px 50px;
ustify-content: stretch;

`
const HomeImageContainer = styled.div`
grid-column-start: 2;
grid-column-end: 14;
grid-row-start: 1;
grid-row-end: 6;
height: 730px;
width: auto;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin: 0;

`


export default function Home({ data }) {
  const backgroundUrl = data.allContentfulPainting.edges[0].node.image.fluid.src

  return (
    <Layout>
      <Container>
        <HomeImageContainer style={{ backgroundImage: `url(${backgroundUrl})` }}>
        </HomeImageContainer>
      </Container>
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

