import React, { Component} from 'react';

class Assignment extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <table className="table">
                <thead className="thead-dark">
                <th>{this.props.assignment.username}</th>
                <th>{this.props.assignment.assignmentReport}</th>
                <th>{this.props.assignment.timeSubmitted}</th>
                </thead>
            </table>

            <td>
                <a href="#" className="btn btn-info" onClick={()
                     =>{this.props.deleteAssignmnt(this.props.assignment._id)}}>Delete
                </a>
            </td>

        </div> 
        );
    }
}
 
export default Assignment;