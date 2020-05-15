import React, { Component } from 'react'
import { Grid ,Image} from 'semantic-ui-react'

import img1 from './../../images/img1.jpg'
import img2 from './../../images/img2.jpg'
import img4 from './../../images/img4.jpg'

class Banner extends Component {
  render() {
    return (
        <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={img1} height={'350px'} width={'350px'} />
      </Grid.Column>
      <Grid.Column>
        <Image src={img2} height={'350px'} width={'350px'}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={img4} height={'350px'} width={'350px'}/>
      </Grid.Column>
    </Grid.Row>
        </Grid>
)
  }
}
export default Banner;