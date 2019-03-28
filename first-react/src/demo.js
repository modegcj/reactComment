import React,{ Component } from 'react';

var users=[
    {name:'Tom',age:20},
    {name:'Mark',age:22}
]
class User extends Component{
    render(){
        const {user} = this.props
        return(
            <li>姓名: {user.name} 年龄：{user.age}</li>
        )
    }
}
class Demo extends Component{
    static defaultProps = {
        likedText: '取消',
        unlikedText: '确认'
    }
    constructor(){
        super()
        this.state = {isClick: false}
    }
    clickTarget(){
        this.setState({
            isClick: !this.state.isClick
        })
    }
    render(){
        var className = "demo";
        return(
            <div id="demo" className={className}>
                <h1 onClick={this.clickTarget.bind(this)}>{this.state.isClick?this.props.likedText:this.props.unlikedText}</h1>
                <ul className="list">
                    {users.map((user,i)=><User key={i} user={user}/>)}
                </ul>
            </div>
        )
    }
}
export default Demo;