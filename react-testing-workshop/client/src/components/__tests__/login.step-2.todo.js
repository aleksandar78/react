// using helpful utilities
import React from 'react'
// import ReactDOM from 'react-dom'
// 🐨 you'll need these:
import {generate} from 'til-client-test-utils'
import {render, fireEvent, cleanup} from 'react-testing-library'

// note that til-client-test-utils is found in `client/test/til-client-test-utils`
// note also that the client/test/setup-test-framework.js file takes care of
// `import react-testing-library/cleanup-after-each'` for us.
import Login from '../login'

afterEach(cleanup) // this is required to cleanup container between tests

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 use generate.loginForm() here instead of assigning fakeUser to an object

  const fakeUser = generate.loginForm({username: 'chucknorris', password: '(╯°□°）╯︵ ┻━┻'}); // {username: 'chucknorris', password: '(╯°□°）╯︵ ┻━┻'}
  const handleSubmit = jest.fn()
  // 🐨 use: render(<Login onSubmit={handleSubmit} />)
  // It'll give you back an object with
  // `getByLabelText` and `getByText` functions
  // so you don't need a div anymore!

  // const div = document.createElement('div')
  // const container = render(<Login onSubmit={handleSubmit} />)
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />)
  const usernameNode = getByLabelText('Username');
  const passwordNode = getByLabelText(/password/i); // can be set as case insensitive
  // const inputs = div.querySelectorAll('input')
  // const usernameNode = inputs[0]
  // const passwordNode = inputs[1]
  // const formNode = div.querySelector('form')
  const submitButtonNode = getByText(/Submit/) // can be used with Regex

  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Act
  fireEvent.click(submitButtonNode) // this trigger event on button instead of using Event object
  // const event = new window.Event('submit')
  // formNode.dispatchEvent(event)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  // 🐨 this assertion is no longer necessary:
  expect(submitButtonNode.type).toBe('submit')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-2%20(react-testing-library)&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
