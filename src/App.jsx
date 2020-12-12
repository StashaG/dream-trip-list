
import React, { Component}  from 'react';
import Table from './component/Table';
import Form from './component/Form';

class App extends Component {
    state = {
      characters: [],
    };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }
  

    render() {
      const { characters } = this.state;

      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      );
    }
  }

  export default App;