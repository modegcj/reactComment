import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import '../style/css/CommentApp.css'

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }
    handleSubmit(comment){
        var comments = this.state.comments;
        comments.push(comment)
        this.setState({
            comments:comments
        })
    }
    deleteComment(index){
        const comments = this.state.comments
        comments.splice(index,1)
        this.setState({comments})
    }
    render(){
        return(
            <div className="comment-app-box">
                <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                <CommentList onDeleteComment={this.deleteComment.bind(this)} comments={this.state.comments} />
            </div>
        )
    }
}
export default CommentApp