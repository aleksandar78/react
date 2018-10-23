import React, { Component } from 'react'; // MUST BE IMPORTED IN EACH COMPONENT
import classes from './Person.css';
import withClassName from '../../../hoc/withClassName';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log(`Person.js props in constructor`, props);
  }

  componentWillMount() {
    console.log(`Person.js component will mount`);
  }

  componentDidMount() {
    console.log(`Person.js component did mount`);
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log(`Person.js render`);
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hi, I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changes: PropTypes.func
}

export default withClassName(Person, classes.Person); // MUST BE EXPORTED AS DEFAULT IF WE WONT TO SKIP NAMED IMPORTS
