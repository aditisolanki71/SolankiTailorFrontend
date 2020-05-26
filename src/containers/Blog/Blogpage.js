import React, { Component, Fragment } from 'react'
import { Grid ,Image,Header} from 'semantic-ui-react'
import HeaderPage from '../Dashboard/Header'
import Footer from '../Dashboard/Footer'

import img1 from './../../images/img1.jpg'
import img2 from './../../images/img2.jpg'
import img4 from './../../images/img4.jpg'
class BlogPage extends Component {
  render() {
    return (
        <Fragment>
              <HeaderPage />
        <Header as='h3' textAlign='center' dividing>
       From The Blog
      </Header>
        <Grid>
    <Grid.Row columns={3} style={{"margin": "30px"}} >
      <Grid.Column style={{ "border": "1px solid black","padding": "10px"}}>
        <Image src={img1} circular size="small" centered />
        <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at.
    </p>
      </Grid.Column>
      <Grid.Column style={{ "border": "1px solid black","padding": "10px"}}>
        <Image src={img2} circular size="small" centered/>
        <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. 
    </p>
      </Grid.Column>
      <Grid.Column style={{ "border": "1px solid black","padding": "10px"}}>
        <Image src={img4} circular size="small" centered/>
        <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. 
    </p>
      </Grid.Column>
     </Grid.Row>
        </Grid>
        <Footer />
        </Fragment>
)
  }
}
export default BlogPage;