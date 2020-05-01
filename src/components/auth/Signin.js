import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/Action/authAction";
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { authError,auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
    <div className='red-text'>{authError&&(<p>{authError}</p>)}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
