import React,{ Component } from 'react';
import '../style/css/CommentInput.css'

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            isTopFocus: false,
            isBotFocus: false,
            username: '',
            content: ''
        }
    }
    topFocus(){
        this.setState({
            isTopFocus: true
        })
    }
    topBlur(){
        this.setState({
            isTopFocus: false
        })
    }
    botFocus(){
        this.setState({
            isBotFocus: true
        })
    }
    botBlur(){
        this.setState({
            isBotFocus: false
        })
    }
    changeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    changeContent(e){
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const { username,content } = this.state
            const date = new Date();
            const inputdateArr = date.toLocaleDateString().split("/");
            if(inputdateArr[1]<10){
                inputdateArr[1] = "0"+inputdateArr[1]
            }
            if(inputdateArr[2]<10){
                inputdateArr[2] = "0"+inputdateArr[2]
            }
            const inputdate = inputdateArr.join("-");
            const inputtimeArr = date.toLocaleTimeString().substring(2).split(":");
            if(inputtimeArr[0]<10){
                inputtimeArr[0] = "0"+inputtimeArr[0]
            }
            const inputtime = inputtimeArr[0] + ":" + inputtimeArr[1];
            this.props.onSubmit({username,content,inputdate,inputtime})
        }
        this.setState({
            content:''
        })
    }
    componentDidMount(){
        this.input.focus();
    }
    render(){
        return(
            <div className="comment-input-box">
                <div className="comment-input-top comment-input">
                    <span>用户名：</span>
                    <div className={this.state.isTopFocus?'inpout sinpout':'inpout'}>
                        <input onFocus={this.topFocus.bind(this)} onBlur={this.topBlur.bind(this)} onChange={this.changeUsername.bind(this)} value={this.state.username} placeholder="用户名" />
                    </div>
                </div>
                <div className="comment-input-bottom comment-input">
                    <span>评论内容：</span>
                    <div className={this.state.isBotFocus?'inpout sinpout':'inpout'}>
                        <textarea ref={(input) => this.input = input} onFocus={this.botFocus.bind(this)} onBlur={this.botBlur.bind(this)} onChange={this.changeContent.bind(this)} value={this.state.content} placeholder="评论内容" />
                    </div>
                </div>
                <div className="comment-button-box">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput