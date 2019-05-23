import React from 'react';
import { shallow } from 'enzyme';
import Posts from './Posts';

describe('Posts component', () => {
  it('renders a Posts', () => {
    const postArr = [
      { title: 'title1', postBody: 'things about things' },
      { title: 'title2', postBody: 'things' },
      { title: 'title3', postBody: 'things things' },
      { title: 'title4', postBody: 'about' }
    ];
    const wrapper = shallow(<Posts postArr={postArr}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
