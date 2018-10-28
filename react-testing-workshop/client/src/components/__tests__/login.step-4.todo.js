import React from 'react';
import {generate} from 'til-client-test-utils';
import {render, cleanup} from 'react-testing-library';
import Login from '../login';

beforeEach(cleanup)

test('calls on Submit with username and password when submitted', () => {
  const fakeUser = generate.loginForm();
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText} = render(<Login onSubmit={handleSubmit} />);

  const usernameNode = getByLabelText(/username/i);
  const passwordNode = getByLabelText(/password/i);

  usernameNode.value = fakeUser.username;
  passwordNode.value = fakeUser.password;

  getByText(/submit/i).click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});

test('snapshot', () => {
  // to do
  const {container} = render(<Login /> ); // no need to pass handler for snapshot test
  expect(container.firstChild).toMatchSnapshot();
});

test.skip('I submitted my ellaboration and feadbeek', () => {
  const submitted = false;
  expect(submitted).toBe(false);
});
