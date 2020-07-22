import React, { Component } from 'react';
import axios  from 'axios';



class RegisterStudent extends Component {
    constructor() {
        super()
        this.state = { 
            username: ''
         }
         this.changedUsername = this.changedUsername.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
    }

    changedUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const student = {
            username: this.state.username,
        }
      console.log(student);
    
   axios.post('http://localhost:5000/student/create', student)
    .then(response => console.log(response.data))

        this.setState({
            username:""
        });
    }
    render() { 
        return (
            <div>
                <div className="accordion mt-5" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button 
                                className="btn btn-link" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne">
                                    Student Registration Form
                                </button>
                            </h2>
                        </div>
                        <div 
                        id="collapseOne" 
                        className="collapse show"
                        aria-labelledby="headingOne" 
                        data-parent="#accordionExample">
                        <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aliquam necessitatibus nemo sequi officiis expedita temporibus iure
                                dolore ea praesentium, deserunt veritatis eveniet recusandae libero 
                                vitae accusantium aut non voluptatibus. Tenetur ad vel commodi consectetur voluptatum?
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={this.onSubmit}>
                <label>Student Name</label>
                <input type="text" 
                onChange={this.changedUsername} 
                value={this.state.username} 
                className="form-group form-control"/>
                <input type="submit" className="btn btn-outline-primary" value="Submit"/>
            </form>
            <div className="bar bg-info mt-5">
            </div>

             </div>
          );
    }
}
 
export default RegisterStudent;