import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty , isUndefined} from 'lodash'
import moment from 'moment'
import { patchCard } from '../actions/index'
import swal from 'sweetalert2'
import {
  withSwalInstance
} from 'sweetalert2-react'
import {
  Responsive,
  Grid,
  Container,
  Form,
  Header,
  Card,
  Icon,
  Button,
  Message
} from 'semantic-ui-react'

const SweetAlert = withSwalInstance(swal)

export class FormFin extends Component {
  constructor(props){
    super(props)
    this.state = {
      card: {},
      error: {}
    }
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      card: {
        ...this.state.card,
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const error = this.validate(this.state.card)
    console.log('state', this.state.card)
    console.log('error', this.state.error)
    if (isEmpty(error)) {
      let id = this.props.card_to_patch.card.id
      let data_to_send = this.state.card
      const body = {
        id,
        data_to_send
      }
      console.log('bodyToSend', body)
      this.props.patchCard(body)
    } else {
      let messages = []
      if(!!error.card_number){
        messages.push(error.card_number)
      }
      if(!!error.exp_date){
        messages.push(error.exp_date)
      }
      if(!!error.cvv){
        messages.push(error.cvv)
      }
      if(!!error.reference_id){
        messages.push(error.reference_id)
      }
      this.setState({ ...this.state, error: { messages }})
    }
  }
  validate = data => {
    const error = {}
    if(!data.card_number){
      error.card_number = 'Card number cannot be empty'
    }
    if(!data.exp_date){
      error.exp_date = 'Expiration date cannot be empty'
    }
    if(!data.cvv){
      error.cvv = 'CVV cannot be empty'
    }
    if(!data.reference_id){
      error.reference_id = 'Reference id cannot be empty'
    }
    return error
  }
  closeSwal = () => {
    this.setState({
      ...this.state,
      isValidRequest: false
    })
  }
  render() {
    let card = !isEmpty(this.props.card_to_patch) ? this.props.card_to_patch.card : { name_on_card: '', created_at: moment().format('DD/MM/YYYY'), exp_date: moment().format('DD/MM/YYY'), balance: 0}
    if(card.name_on_card === ''){
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
                  <Card fluid>
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
                <Grid.Column>
                  <Header as='h3'>Da Form!</Header>
                    { isEmpty(this.state.error) ? 
                      <div></div>
                      :
                      <Message negative>
                        <Message.Header>Ops Error!</Message.Header>
                        <div>
                          <p>
                            Error:
                          </p>
                          <ul>
                            {
                              this.state.error.messages instanceof Array ? 
                              this.state.error.messages.filter(message => message !== undefined).map(message => <li>{message}</li>)
                              :
                              <div></div>
                            }
                          </ul>
                        </div>
                      </Message>
                    }
                    <Form onSubmit={this.onSubmit}> 
                      <Form.Field>
                        <Form.Input
                        name='card_number'
                        placeholder='Card Number'
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='exp_date'
                        placeholder='Expiration date mm/YY'
                        onChange={this.onChange}
                         />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='cvv'
                        placeholder='CVV'
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='reference_id'
                        placeholder='Reference id'
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Button inverted color='green'>Patch it!</Button>
                      </Form.Field>
                  </Form>

                  <SweetAlert 
                  show={this.state.isValidRequest}
                  title={'Success on Patched!'}
                  onConfirm={() => { this.closeSwal()}}
                  type={'success'}
                  />
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
  return bindActionCreators({ patchCard }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FormFin)
