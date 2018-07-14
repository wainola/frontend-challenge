import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export class FinCards extends Component {
  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name on Card</Table.HeaderCell>
              <Table.HeaderCell>Expiration Date</Table.HeaderCell>
              <Table.HeaderCell>Balance</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    )
  }
}

export default FinCards
