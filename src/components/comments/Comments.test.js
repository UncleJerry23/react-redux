import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';

describe('Comments component', () => {
  it('renders a Comments', () => {

    const comments = [
      {
        title: 'title of my comment',
        comment: 'this is my comment'
      },
      {
        title: 'by me',
        comment: 'this is me comment'
      },
      {
        title: 'by you',
        comment: 'this you comment'
      },
    ];

    const wrapper = shallow(<Comments comments={comments}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
