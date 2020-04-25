import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import CommentList from '../CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
  <Root>
    <App />
  </Root>
  );
});

it('Shows the header with appropriate number of objects', () => {
  expect(component.find('.header').length).toEqual(1);
  expect(component.find('.header').children().length).toEqual(3);
});

it('Shows a comment list', () => {
  expect(component.find(CommentList).length).toEqual(1);
});
