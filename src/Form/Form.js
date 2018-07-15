import React, { Component } from 'react'
import {
  Responsive,
  Grid,
  Container,
  Form,
  Header
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class FormFin extends Component {
  onSubmit = e => {
    e.preventDefault()
  }
  render() {
    console.log('this.props form', this.props)
    return (
      <div>
        <Responsive>
          <Container>
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Header as='h3'>Formulario</Header>
                  <Form onSubmit={this.onSubmit}> 
                    <Form.Input
                    name='card_number'
                    placeholder='card_number'
                    
                    />
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    )
  }
}

function mapStateToProps({ card_to_patch }){
  return { card_to_patch }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FormFin)
