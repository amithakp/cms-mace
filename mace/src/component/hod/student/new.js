import React, { Component } from 'react';

const studentRegister ="http://localhost:4000/api/auth/studentRegister";

class New  extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            registrationNumber:'',
            department: '',
            course: '',
            semester: '',
            year:'',
            password:'',
        }
    }
    handleADDStudent  = () =>{
        fetch(studentRegister,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        alert("Successfully Added")
    }    

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Add Student</h2>
                                        <div className="mb-3">
                                            <label>Name</label>
                                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder=" name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Register No</label>
                                            <input type="text" name="registrationNumber" value={this.state.registrationNumber} onChange={this.handleChange} className="form-control" placeholder="registrationNumber"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Department</label>
                                            {/* <input type="text" name="reliefCenterName" value={this.state.reliefCenterName} onChange={this.handleChange} className="form-control" placeholder="Relief centre name"/> */}
                                            <select id="options" name="department" onChange={this.handleChange} value={this.state.department} className="form-control">
                                                <option>Select</option>
                                                <option value="Computer Application">Computer Application</option>
                                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label>Course</label>
                                            <input type="text" name="course" value={this.state.course} onChange={this.handleChange} className="form-control" placeholder="course"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Semester</label>
                                            <input type="text" name="semester" value={this.state.semester} onChange={this.handleChange} className="form-control" placeholder="semester"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Year</label>
                                            <input type="text" name="year" value={this.state.year} onChange={this.handleChange} className="form-control" placeholder="year"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password"/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleADDStudent} className="btn btn-success d-grid gap-2 ">
                                                Add
                                            </button>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}

export default New;
