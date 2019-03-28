import React,{ Component } from 'react';
import '../style/css/Comment.css'

class Comment extends Component{
    deleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    render(){
        return(
            <li className="Comment-box">
                <i>{this.props.comment.username}：</i>{this.props.comment.content}<span>{this.props.comment.inputdate} {this.props.comment.inputtime}</span>
                <p><span onClick={this.deleteComment.bind(this)}>删除</span></p>
            </li>
        )
    }
}
export default Comment;