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

      const formStyle = {
        display: 'flex',
        flexDirection: 'column'
      };

      const inputStyle = {
        width: '80px',
        textAlign: 'center',
        margin: '10px'
      };

      const textAreaStyle = {
        margin: '10px',
        width: '300px',
        height: '100px'
      };

      const bottonStyle = {
        margin: '10px',
        width: '60px',
        textAlign: 'center'
      };

      return (
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input style={inputStyle} type="text" name="title" value={title} placeholder="Post Title" onChange={this.handleChange}></input>
          <textarea style={textAreaStyle} name="postBody" value={postBody} placeholder="Post Body" onChange={this.handleChange} /> 
          <button style={bottonStyle}>SUBMIT</button>
        </form>
      );
    }
}
