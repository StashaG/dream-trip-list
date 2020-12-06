import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Dream Trip Destination</th>
        </tr>
      </thead>
    )
  }
  
  const TableBody = (props) => {
      const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.trip}</td>
            </tr>    
        )
      })
      
    return <tbody>{rows}</tbody>
}
  
  class Table extends Component {
      render() {
          const {characterData} = this.props

          return (
          <table class="table table-hover">
              <TableHeader />
              <TableBody characterData={characterData}/>
          </table>
          )
      }
  }
  

export default Table;