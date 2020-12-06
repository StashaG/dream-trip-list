import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Dream Trip Destination</th>
        </tr>
      </thead>
    )
  }
  
  const TableBody = () => {
    return (
      <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Stacey</td>
            <td>Kenya</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Summer</td>
            <td>London</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="1">Jasmine</td>
            <td>Thailand</td>
        </tr>
        </tbody>
          )
      }
  
  class Table extends Component {
      render() {
          return (
          <table class="table table-hover">
              <TableHeader />
              <TableBody />
          </table>
          )
      }
  }
  

export default Table;