import React,{Component} from 'react';
import {connet} from 'react-redux';
import * as actions  '../actions';


export default class CommentBox extends Component{
  constructor(props){
    super(props);

    this.state = {comment:''};
  }

  handleChange(event){
    this.setState({comment:event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({comment:''})
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit.bind(this)} className='form-group comment-box'>
          <textarea col='3' row='5'
            value ={this.state.comment}
             onChange={this.handleChange.bind(this)}></textarea>
          <br/>
          <button action="submit" className="btn btn-default">Submit Comment</button>
        </form>
    )
  }
}

export default connect(null,actions)(CommentBox);
