import React, { Component } from 'react'
import {
  Responsive,
  Grid,
  Container,
  Form,
  Header
} from 'semantic-ui-react'

export class FormFin extends Component {
  onSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <Responsive>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header as='h3'>Formulario</Header>
                <Form onSubmit={this.onSubmit}> 
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    )
  }
}
export default FormFin
