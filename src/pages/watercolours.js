import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
display: grid;
grid-template-columns: 140px 136px auto auto auto auto auto auto auto auto auto auto 136px 140px;
grid-template-rows: 100px 100px 100px 730px 50px;
ustify-content: stretch;

`

const ThumbnailViewContainer = styled.div`
grid-column-start: 3;
grid-column-end: 14;
grid-row-start: 3;
grid-row-end: 5;
`


class WatercolourPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isThumbnailView: false
    }
  }

  render() {
    return (
      <Layout>
        <Container>
          <ThumbnailViewContainer>
            <h1>About the Author</h1>
            <p>thumbnailview</p>
          </ThumbnailViewContainer>
        </Container>
      </Layout>
    )
  }
}

export default WatercolourPage