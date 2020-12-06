
import React, { Component}  from 'react';
import Table from './Table';

class App extends Component {
    render() {
      const characters = [
        {
          name: 'Stacey',
          trip: 'Kenya'
        },
        {
          name: 'Summer',
          trip: 'London'
        },
        {
          name: 'Jasmine',
          trip: 'Thailand'
        },
      ]

      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
    }
  }
  
  export default App;