import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let component;
beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});

describe('the text area', () => {
  let newComment;
  beforeEach(() => {
    newComment = 'new comment';
  
    component.find('textarea').simulate('change', {
      target: { value: newComment }
    });
    component.update();
  });

  it('has a text area that users can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual(newComment);
  });
  
  it('when text area is submitted, text area should be cleared', () => {  
    expect(component.find('textarea').prop('value')).toEqual(newComment);
  
    component.find('form').simulate('submit');
    component.update();
  
    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
