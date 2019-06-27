import React from 'react'
import { Component } from 'react'

function Fruit(props){ 
    return(
         <h1>Fruit:Name:-{props.name},Color:-{props.color},
                  No.of Seeds:-{props.seeds},Taste:-{props.taste}
         </h1>    
    )

}

{/*function Vegetables(veggies){
    return(
        <h1>Vegetable:Name:-{veggies.name},color:-{veggies.color},
             Weight:-{veggies.weight},Price:-{veggies.price}
        </h1>
    )
}  */}

class StprEx extends Component{

    constructor(){
        super()
        this.state={
            info : 'Info to be Submitted'
        }
    }
    
    updateinfo(){
        this.setState({
            info : 'OK Info Submitted'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.info}</h1>
                <button onClick ={()=>this.updateinfo()}>Submit</button>
                {/*<h1>Name of Vegetable:{veggies.name}</h1>*/}
            </div>
        );
    }
}

export default StprEx
