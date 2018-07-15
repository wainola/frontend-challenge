import React, { Component } from 'react'
import {
  Responsive,
  Grid,
  Container,
  Form,
  Header,
  Card,
  Icon
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'

export class FormFin extends Component {
  onSubmit = e => {
    e.preventDefault()
  }
  render() {
    console.log('this.props form', this.props)
    const { card } = this.props.card_to_patch ? this.props.card_to_patch : {}
    if(isEmpty(card)){
      this.props.history.goBack()
    }
    return (
      <div>
        <Responsive>
          <Container>
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Link to='/'>Back to home!</Link>
                  <Header as='h3'>Formulario</Header>
                  <Form onSubmit={this.onSubmit}> 
                    <Form.Input
                    name='card_number'
                    placeholder='card_number'
                    />
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Name on card: {card.name_on_card}</Card.Header>
                      <Card.Meta>
                        <span className='date'>Created at: {card.created_at}</span>
                      </Card.Meta>
                      <Card.Description>
                        Date of expiration: {card.exp_date}
                        <br/>
                        Balance: {card.balance}
                      </Card.Description>
                    </Card.Content>
                  </Card>
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
