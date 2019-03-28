import React,{Component} from 'react';

class Demo1 extends Component{
    constructor(){
        super()
        this.state = {
            date: new Date(),
            content:'<h2>react.js</h2>'
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentDidMount(){
        console.log(this.input)
    }
    render(){
        return(
            <div>
                <h1>
                    <p style={{color:'red'}}>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
                <input ref={(input) => this.input = input}/>
                <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                
            </div>
        )
    }
}
export default Demo1