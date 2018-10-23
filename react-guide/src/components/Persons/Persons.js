import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log(`Persons.js props in constructor`, props);
  }

  componentWillMount() {
    console.log(`Persons.js component will mount`);
  }

  componentDidMount() {
    console.log(`Persons.js component did mount`);
  }

  componentWillReceiveProps(nextProps) {
    console.log(`Persons.js will receive props `, nextProps);
  }

  // This kind of logic is already implemented in PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`Persons.js should component update`, nextProps, nextState);
  //   // Change component DOM only when persons are has been changed
  //   // If return false update will not be propagated
  //   // return true; // this is default behavoiur
  //   return this.props.persons !== nextProps.persons || 
  //   this.props.changed !== nextProps.changed ||
  //   this.props.clicked !== nextProps.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(`Persons.js will update`, nextProps, nextState);
  }

  componentDidUpdate() {
    console.log(`Persons.js did update`);
  }

  render() {
    console.log(`Persons.js render`);
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, index)}
      />
    ));
  }

}

export default Persons;
