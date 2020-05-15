import React, { Component, Fragment } from 'react'
import { Grid ,Image,Header} from 'semantic-ui-react'

import img1 from '../../../public/images/img1.png'
import img2 from '../../../public/images/img2.png'
import img4 from '../../../public/images/img4.png'
class Topdesign extends Component {
  render() {
    return (
        <Fragment>
        <Header as='h3' textAlign='center' dividing>
       Top Design
      </Header>
        <Grid>
    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src={img1}  />
      </Grid.Column>
      <Grid.Column>
        <Image src={img2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={img4} />
      </Grid.Column>
      <Grid.Column>
        <Image src={img1}  />
      </Grid.Column>
      <Grid.Column>
        <Image src={img2} />
      </Grid.Column>
    </Grid.Row>
        </Grid>
        </Fragment>
)
  }
}
export default Topdesign;