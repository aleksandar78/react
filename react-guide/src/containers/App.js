import React, { Component } from 'react';
import classes from './App.css';
import '../components/Persons/Person/Person.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClassName from '../hoc/withClassName';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`App.js props in constructor`, props);
    // Initialization can be done in constructor
    this.state = {
      persons: [
        { id: 'id1', name: 'Alex', age: 40 },
        { id: 'id2', name: 'Sanela', age: 38 },
        { id: 'id3', name: 'Stefan', age: 9 },
        { id: 'id4', name: 'Sofija', age: 7 }
      ],
      showPersons: false,
      toggleClicked: 0
    }; // ONLY AVAILABLE IN CLASS COMPONENTS, IF CHANGES REACT RENDER TEMPLATE
  }

  componentWillMount() {
    console.log(`App.js component will mount`);
  }

  componentDidMount() {
    console.log(`App.js component did mount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`App.js should component update`, nextProps, nextState);
    return (
      this.state.persons !== nextState.persons ||
      this.state.showPersons !== nextState.showPersons
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`App.js will update`, nextProps, nextState);
  }

  componentDidUpdate() {
    console.log(`App.js did update`);
  }

  switchPersonHandler = newName => {
    // DON'T DO THIS, REACT DOES NOT PERMIT DATA MUTUATION
    // this.state.persons[0].name = 'Aleksandar';

    /*
    * React expose setState method that receives
    * object that will override only new values. Object.assign()
    */
    this.setState({
      persons: [
        { id: 'id1', name: newName, age: 40 },
        { id: 'id2', name: 'Sanela', age: 38 },
        { id: 'id3', name: 'Stefan', age: 8 },
        { id: 'id4', name: 'Sofija', age: 7 }
      ]
    });
  };

  nameChangeHandler = (event, index) => {
    const person = { ...this.state.persons[index] };
    person.name = event.target.value; // VALUE GET FROM INPUT
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    // Safe way of updateding state that 
    // can render correctly component. 
    this.setState((prevState, props) => ({
      showPersons: !prevState.showPersons,
      toggleClicked: prevState.toggleClicked + 1
    }));
  };

  render() {
    console.log(`App.js render`);
    /*
    * Styling with style JSX syntaxt. 
    * This is alternative to css file styling.
    * It's ok for small style customizations but 
    * for bug customizations like hovers and other
    * externalizing styling into seprate css file
    * is the way to do it.
    */
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
    // const nestedEl =  React.createElement('h1', null, 'Hi, from React!!!');
    // return React.createElement('div', {className: 'App'}, nestedEl);
  }
}

export default withClassName(App, classes.App);
