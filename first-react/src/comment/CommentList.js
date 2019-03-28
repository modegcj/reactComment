import React,{ Component } from 'react';
import Comment from './Comment';
import '../style/css/CommentList.css'

class CommentList extends Component{
    deleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return(
            <ul className="Comment-list-box">
                {this.props.comments.map((comment,i)=><Comment comment={comment} index={i} onDeleteComment={this.deleteComment.bind(this)} key={i}/>)}
            </ul>
        )
    }
}
export default CommentList;