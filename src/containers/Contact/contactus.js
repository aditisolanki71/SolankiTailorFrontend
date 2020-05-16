import React ,{ Component,Fragment }from 'react';
import ContactPage from './contactpage'
import CommentPage from './commentpage'
import { Grid ,Header} from 'semantic-ui-react'
class Contactus extends Component {
  render() {
  return (
    <Fragment>
        <Header as='h3' textAlign='center' dividing>
            Contact us 
        </Header>
        <Grid>
            <Grid.Row >
                <Grid.Column width={8} style={{"border": "1px solid black"}}>
                    <ContactPage />
                </Grid.Column>    
                <Grid.Column width={8} style={{"border": "1px solid black"}}>
                    <CommentPage />
                </Grid.Column>    
            </Grid.Row>
        </Grid>
        </Fragment>

       
   )
}
}
export default Contactus;
