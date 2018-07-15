import React, { Component } from 'react'
import {
  Responsive,
  Grid,
  Container,
  Form,
  Header,
  Card,
  Icon,
  Button
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty , isUndefined} from 'lodash'
import moment from 'moment'

export class FormFin extends Component {
  constructor(props){
    super(props)
    this.state = {
      card: {}
    }
  }
  onSubmit = e => {
    e.preventDefault()
  }
  componentWillMount(){
    let card 
    if(isEmpty(this.props.card_to_patch.card) || isUndefined(this.props.card_to_patch.card)){
      console.log('card')
      this.props.history.goBack()
    }
    else {
      // card = this.props.card_to_patch.card
      this.setState({card: this.props.card_to_patch.card})
    }
  }
  render() {
    console.log('this.props form', this.props)
    return (
      <div>
        <Responsive>
          <Container>
            <Grid stackable>
              <Grid.Row columns={2}>
              <Grid.Column>
                  <Link to='/'>Back to home!</Link>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header>Name on card: {card.name_on_card}</Card.Header>
                      <Card.Meta>
                        <span className='date'>Created at: {card.created_at}</span>
                      </Card.Meta>
                      <Card.Description>
                        Date of expiration: {moment(card.exp_date).format('DD/MM/YYYY')}
                        <br/>
                        Balance: {card.balance}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3'>Formulario</Header>
                    <Form onSubmit={this.onSubmit}> 
                      <Form.Field>
                        <Form.Input
                        name='card_number'
                        placeholder='card_number'
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='exp_date'
                        placeholder='expiration date'
                         />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='cvv'
                        placeholder='cvv'
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='reference_id'
                        placeholder='reference id'
                        />
                      </Form.Field>
                      <Form.Field>
                        <Button inverted color='green'>Patch it!</Button>
                      </Form.Field>
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
