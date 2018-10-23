import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  const assignedClassed = [];
  if (props.persons.length <= 2) {
    assignedClassed.push(classes.Red);
  }
  if (props.persons.length <= 1) {
    assignedClassed.push(classes.Bold);
  }
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClassed.join(' ')}>This is realy working!</p>
      {/* Passing arrow function can be ineficient in performance point of view */}
      <button className={btnClass} onClick={props.clicked}>
        Switch Person
      </button>
    </Aux>
  );
};

export default cockpit;
