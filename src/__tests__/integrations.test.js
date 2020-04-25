import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

let response;

beforeEach(() => {
  response = [{ name: 'Fetched Comment 1'}, { name: 'Fetched Comment 2'}];
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  component.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    component.update();

    expect(component.find('li').length).toEqual(response.length);

    done();
    component.unmount();
  });
});
