import { Component } from "react";

class StateClass extends Component{
    state={
        Actress:"LoosuCutie",
        price:"UlagaAlagi"
    }
    handleChange=()=>{this.setState({Actress:"Aishwarya Rai"})}
    render()
    {
        return(
            <div>
<h1>She looks like {this.state.Actress} and she is a {this.state.price}</h1>
<button onClick ={this.handleChange}>Click me</button>
            </div>
        
        )
    }
}
export default StateClass;