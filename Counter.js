import React, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count : 0,
            limit : 10
        }
    }


incrementCount(){
    this.setState({
        count : this.state.count + 1
    })   

   {/* if(this.setState.count === this.state.limit){
        console.log("You have reached the count limit ");
    }   */}
}

message(){
    let  count = this.state.limit;
    if(count){
        return ("You have reached the count limit");
    }
    return("continue clicking");


    {/*message2(){
    const {count} = this.state.limit;
    return count === 10 ? "You have reached the count limit" : this.setState.count;
    }
    */}
}

  render(){
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick = {()=>this.incrementCount()}>Increment</button>
        </div>
    );   
  }
}


export default Counter
