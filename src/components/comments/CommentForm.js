import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    comment: ''    
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const { title, comment } = this.state;
      this.props.onSubmit(title, comment);
      this.setState({ title: '', comment: '' });
    }

    render() {
      const { title, comment } = this.state;

      const formStyle = {
        display: 'flex',
        flexDirection: 'column'
      };

      const headerStyle = {
        margin: '10px'
      };

      const inputStyle = {
        width: '80px',
        textAlign: 'center',
        margin: '10px'
      };

      const textAreaStyle = {
        margin: '10px',
        width: '200px',
        height: '40px'
      };

      const buttonStyle = {
        margin: '10px',
        width: '60px',
        textAlign: 'center'
      };

      return (
        <>
          <h4 style={headerStyle}>Make a Comment</h4>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <input style={inputStyle} type="text" name="title" value={title} placeholder="Comment Title" onChange={this.handleChange}></input>
            <textarea style={textAreaStyle} name="comment" value={comment} placeholder="Comment Body" onChange={this.handleChange} /> 
            <button style={buttonStyle}>SUBMIT</button>
          </form>
        </>
      );
    }
}
