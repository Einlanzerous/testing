import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

let response, component;

beforeEach(() => {
  response = [{ name: 'Fetched Comment 1'}, { name: 'Fetched Comment 2'}];
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response
  });
  component = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  component.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    component.update();

    expect(component.find('.comments').length).toEqual(response.length);

    done();
    component.unmount();
  });
});

it('sign-in and sign-out change applicable button', () => {
  component.find('.sign-in-button').simulate('click');

  expect(component.find('.sign-out-button').length).toEqual(1);

  component.find('.sign-out-button').simulate('click');

  expect(component.find('.sign-in-button').length).toEqual(1);
});
