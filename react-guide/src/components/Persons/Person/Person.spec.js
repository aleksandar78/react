import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';

test('should', () => {
    const age = 40;
    const name = 'Alex';
    const container = document.createElement('div');
    ReactDOM.render(<Person name={name} age={age} changed={console.log}/>, container);
    expect(container.textContent).toMatch("Hi, I'm Alex and I'm 40 years old!");
});