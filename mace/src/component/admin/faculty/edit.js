import React, { Component } from 'react';

const editTeacher ="http://localhost:4000/api/auth/teacher";

class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            registrationNumber: '',
            department:'',
            course: '',
            subject: '',
            password: '',
            role: ''
        }
    }
    handleUpdate  = (event) =>{
        fetch(editTeacher,{
            method:'PUT',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                name:event.target.name.value,
                email:event.target.email.value,
                department:event.target.department.value,
                course:event.target.course.value,
                subject:event.target.subject.value,
                password:event.target.password.value
            })
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result,"inside handleEditTeacher")
            this.setState({[this.state.name]:event.target.name,
                [this.state.email]:event.target.email,
                [this.state.department]:event.target.department,
                [this.state.course]:event.target.course,
                [this.state.subject]:event.target.subject,
                [this.state.password]:event.target.password
            })
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
            
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="w-75 mx-auto shadow p-5">
                                        <h2 className="text-center mb-4">Edit Faculty</h2>
                                         <div className="mb-3">
                                            <label>Name</label>
                                            <input type="text" name="busNo" defaultValue={this.props.contact_Number} onChange={this.handleChange} className="form-control" placeholder="Contact Number" />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label>Register No</label>
                                            <input type="text" name="busNo" defaultValue={this.props.contact_Number} onChange={this.handleChange} className="form-control" placeholder="Contact Number" />
                                        </div> */}
                                        <div className="mb-3">
                                            <label>Department</label>
                                            {/* <input type="text" name="reliefCenterName" value={this.state.reliefCenterName} onChange={this.handleChange} className="form-control" placeholder="Relief centre name"/> */}
                                            <select id="options" name="department" defaultValue={this.props.department} onChange={this.handleChange} className="form-control">
                                                <option>Select</option>
                                                <option value="Computer Application">Computer Application</option>
                                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label>Course</label>
                                            <input type="text" name="course" defaultValue={this.props.course} onChange={this.handleChange} className="form-control" placeholder="course" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Subject</label>
                                            <input type="text" name="subject" defaultValue={this.props.subject} onChange={this.handleChange} className="form-control" placeholder="Subject" />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleUpdate} className="btn btn-success d-grid gap-2 ">
                                              Update 
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

export default Edit;
