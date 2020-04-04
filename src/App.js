import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      {id: 'fdgfg', name: 'Toshi', age: 22},
      {id: '98dsd', name: 'Takagi', age: 20},
      {id: 'plk23', name: 'hiro', age: 25}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person  
              click={() => this.deletePersonHandler(index)} 
              key={person.id} 
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
             />
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = ["red"];
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red", "bold"];
    }

    return (
      <div className="App">x
        <h1>Hi, I'm React</h1>
        <p className={classes.join(" ")}>This is realy working!</p>
        <button className="button" onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>  
    );
  }
}

export default App;
