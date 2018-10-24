import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login';

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {

  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)

  const fakeSubmit = jest.fn();

  // 🐨 create a jest.fn() for your submit handler

  // 🐨 render the Login component to a div

  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={fakeSubmit}/>, div);

  // 🐨 get the field nodes
  const form = div.querySelector('form')
  // 🐨 fill in the field values

  const { username, password } = form.elements;

  username.value = 'alex';
  password.value = '1234';

  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  const submit = new window.Event('submit');
  form.dispatchEvent(submit);
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(fakeSubmit).toHaveBeenCalledTimes(1);
  expect(fakeSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  });
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
