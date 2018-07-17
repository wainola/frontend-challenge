import React, { Component } from 'react'
import { Table, Grid, Responsive, Container, Header } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getCards,
  sendToPatch
} from '../actions/index'
import { Link } from 'react-router-dom'

export class FinCards extends Component {
  componentWillMount(){
    this.props.getCards()
  }
  sendToPatch = item => {
    this.props.sendToPatch(item)
  }
  renderData = item => {
    return(
      <Table.Row key={item.id}>
        <Table.Cell>{item.name_on_card}</Table.Cell>
        <Table.Cell>{item.exp_date}</Table.Cell>
        <Table.Cell>{item.balance}</Table.Cell>
        <Table.Cell>{item.created_at}</Table.Cell>
        <Table.Cell><Link to={`/patch-cards/${item.id}`} onClick={() => this.sendToPatch(item)}>Patch!</Link></Table.Cell>
      </Table.Row>
    )
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <Responsive>
          <Container>
            < Grid verticalAlign='middle'>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Header as='h1' style={{ margintTop: '45px'}}>The Cards!</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name on Card</Table.HeaderCell>
                        <Table.HeaderCell>Expiration Date</Table.HeaderCell>
                        <Table.HeaderCell>Balance</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                        <Table.HeaderCell>Patch it!</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      { this.props.cards.data instanceof Array ?
                        this.props.cards.data.map(item => this.renderData(item))
                        :
                        <Table.Row>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                      }
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    )
  }
}

function mapStateToProps({ cards }){
  return { cards }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCards,
    sendToPatch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FinCards)
