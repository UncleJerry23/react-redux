import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('Post component', () => {
  it('renders a Post', () => {
    const post = { title: 'myPost', postBody: 'thing i talked about' };
    
    const wrapper = shallow(<Post post={post} />);
    expect(wrapper).toMatchSnapshot();
  });
});
