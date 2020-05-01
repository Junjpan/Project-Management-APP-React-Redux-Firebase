import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from '../../store/Action/projectAction';
import { Redirect } from 'react-router-dom';


class CreateProject extends Component {
  state = {
      title:'',
      content:''
  };

   onSubmit=(e)=>{
       e.preventDefault();
       this.props.createProject(this.state);
       this.props.history.push('/')
  }

   handleChange=(e)=>{
      this.setState({[e.target.id]:e.target.value})
      
  }

  render() {
    const {auth}=this.props;

    if (!auth.uid){return <Redirect to='/signin' />}
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit} >
          <h5 className='grey-text text-darken-3'>Create a Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Project Title:</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content:</label>
            <textarea className="materialize-textarea" type='text' id='content' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    auth:state.firebase.auth
  }
}

const mapDisptachToProps=(dispatch)=>{
  // console.log("dispatch",dispatch);
  //"dispatch" function createThunkMiddleware(action)
  return {
    createProject:(project)=>dispatch(createProject(project))
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(CreateProject);

//mapStateToProps is first paramaeter for the connect, when you don't need it, just put a null in it.