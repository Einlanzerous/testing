import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it('Shows a comment box', () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it('Shows a comment list', () => {
  expect(component.find(CommentList).length).toEqual(1);
});
