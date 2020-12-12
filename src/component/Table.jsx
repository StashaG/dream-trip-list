import React from 'react'

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
                <td>
                    <button type="button" class="btn btn-primary"onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>    
        )
      })
      
    return <tbody>{rows}</tbody>
}
  
  const Table = (props) => {
      const {characterData, removeCharacter} = props

        return (
          <table class="table table-hover">
              <TableHeader />
              <TableBody characterData={characterData} removeCharacter={removeCharacter} />
          </table>
          )
        }  
  

export default Table;