import React, {Component} from 'react'

class Practice extends Component {

    constructor(){
        super()
            this.state = {
                text : 'USER INFO',
                value1 : 'abc',
                value2 : 'xyz'
            }
    }

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <label>
                    FirstName:
                    <input type = "text" name = "label1" value = {this.state.value1}
                    />
                </label>
                <br />
                <label>
                    LastName:
                    <input type = "text" name = "label2" value = {this.state.value2}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <label>
                    <input type = "radio"  />Male
                    </label>

                    <label>
                    <input type = "radio" />Female
                    </label>
                </label>
                <br />
                <label>
                    Place:
                    <input type = "text" placeholder = "Enter the place"
                    />
                </label>
                <br />
                <label>
                    DOB:
                    <input type ="date"
                    />
                </label>
                <br />
                <label>
                    Interests:
                    <input type = "checkbox" />Music
                    <input type = "checkbox" />Sports
                    <input type = "checkbox" />Reading
                    <input type = "checkbox" />Surfing
                </label>
                <br />
                <label>
                    UserId:
                    <input type = "text" />
                </label>
                <br />
                <label>
                    Password:
                    <input type = "password" />
                </label>
                <br />
                <label>
                    <input type = "file" />
                </label>
                <br />
                <text align ="top">Comments:</text>
                <label>
                <textarea rows = "10" columns = "30" />
                </label>
                <br />
                <button>Submit</button>
                <br />
                
            </div>

        )
    }

}

export default Practice
