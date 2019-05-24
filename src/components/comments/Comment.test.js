import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Comment component', () => {
  it('renders a Comment', () => {
    const comment = {
      title: 'title of my comment',
      comment: 'this is my comment'
    };

    const wrapper = shallow(<Comment comment={comment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
