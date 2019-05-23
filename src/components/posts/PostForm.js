import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    postBody: ''    
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const { title, postBody } = this.state;
      this.props.onSubmit(title, postBody);
      this.setState({ title: '', postBody: '' });
    }

    render() {
      const { title, postBody } = this.state;

      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} onChange={this.handleChange} />
          <textarea name="postBody" value={postBody} onChange={this.handleChange} /> 
          <button>SUBMIT</button>
        </form>
      );
    }
}
