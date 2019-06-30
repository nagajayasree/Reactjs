import React, { Component } from 'react'
import { numberLiteralTypeAnnotation } from '@babel/types';

class Demo extends Component {
    constructor(props){
    super(props)
        this.state = {
            text : "Hello User",
            message : "Click here to Login ",
            password : "abcdefgh"
        }
    }

    login(){
        this.setState({
            message : "You are logged in"
        })
    }

    render() {

        function UserMessage(props){
            return <h1>Loggedin Successfully</h1>;
        }

        function GuestMessage(props){
            return <h1>Not a Valid Password</h1>
        }
        
        function Message(props){
        const password = props.password;
        if(password){
            return <UserMessage />;
        }
        return <GuestMessage />;
        }

        return (  
        <div>
            <h1>{this.state.text}</h1>
            <label>UserId:
                <input type = "text" placeholder = "Enter the UserId"/>
            </label>
            <br></br>
            <label>Password:
                <input type = "password" />
            </label>
            <br></br>
            <content>{this.state.message}</content>
            <br></br>
            <button onClick = {()=>this.Message}>Login</button>
        </div>
        );
    }
}
 
export default Demo
