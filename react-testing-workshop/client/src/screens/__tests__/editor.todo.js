import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../editor.todo';
import * as mockUtils from '../../utils/api';

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve())
    }
  }
});

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div');
  const fakeUser = {id: 'abb'};
  const fakeHistory = {
    push: jest.fn()
  }
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory}/>, container);
  const form = container.querySelector('form');
  const { title, content, tags } = form.elements;
  title.value = 'I like chocolate';
  content.value = 'Like it very much';
  tags.value = 'choco, likes, my favorite';

  const preSubmit = Date.now();
  const submit = new window.Event('submit');
  form.dispatchEvent(submit);
  await flushPromises();
  const postSubmit = Date.now();

  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  expect(fakeHistory.push).toHaveBeenCalledWith('/');
  expect(mockUtils.posts.create).toHaveBeenCalledTimes(1);
  expect(mockUtils.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['choco', 'likes', 'my favorite'],
    date: expect.any(String)
  });
})

// TODO later...
test('snapshot', () => {})
