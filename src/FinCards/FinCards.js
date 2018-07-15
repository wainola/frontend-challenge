import React, { Component } from 'react'
import { Table, Grid, Responsive, Container, Header } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getCards } from '../actions/index'
import axios from 'axios'

export class FinCards extends Component {
  componentWillMount(){
    this.props.getCards()
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div>
        <Responsive>
          <Container>
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Header as='h4' style={{ margintTop: '45px'}}>The Cards!</Header>
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
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      { }
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
  return bindActionCreators({ getCards }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FinCards)
