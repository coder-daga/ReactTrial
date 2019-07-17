import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name: 'Mayank', age:25},
      {name: 'Rohit', age:25},
      {name: 'Shardul', age:25},
    ]
  };

  switchNameHandler = (newName1) => {
    //  console.log("Button clicked!");
    this.setState({
      persons:[
        {name: newName1, age:27, gender: 'female'},
        {name: 'Rohit', age:25},
        {name: 'Shardul', age:25},
      ] 
    })

  };

  enteredNameHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Priyanka', age:27, gender: 'female'},
        {name: event.target.value , age:25},
        {name: 'Shardul', age:25},
      ] 
    })
  }

  render() {

    const btnStlye = {
      backgroundColor: 'cornflowerblue',
      border: '1px solid cornflowerblue',
      padding: '5px',
      cursor: 'pointer',
      color: '#fff'


    }

    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button 
       style={btnStlye}
       onClick = {this.switchNameHandler.bind(this, 'Akash')}>Switch Names</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click = {this.switchNameHandler.bind(this, 'Sandeep')}
          enteredname = {this.enteredNameHandler}>
          
          My Hobbies: Racing
        </Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
       {/* {console.log(this.state.persons)} */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
