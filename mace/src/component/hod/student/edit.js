import React, { Component } from 'react';

// const studentUrl ="http://localhost:4000/api/auth/student";
const editStudent =`http://localhost:4000/api/auth/updateStudent`;
class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id:'',
            name:'',
            registrationNumber:'',
            // department: '',
            course: '',
            semester: '',
            year:'',
        }
    }
    handleUpdate  = (event) =>{
        fetch(editStudent,{
            method:'PUT',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                _id:event.target._id.value,
                name:event.target.name.value,
                registrationNumber:event.target.registrationNumber.value,
                // department:event.target.department.value,
                course:event.target.course.value,
                semester:event.target.semester.value,
                year:event.target.course.value
            })
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result,"inside handleEditStudent")
            this.setState({[this.state._id]:event.target._id,
                [this.state.name]:event.target.name,
                [this.state.registrationNumber]:event.target.registrationNumber,
                // [this.state.department]:event.target.department,
                [this.state.course]:event.target.course,
                [this.state.semester]:event.target.semester,
                [this.state.year]:event.target.year
            })
        })
        alert("Successfully Updated")
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
                                        <h2 className="text-center mb-4">Edit Student</h2>
                                        <div className="mb-3">
                                            <label>Student Id</label>
                                            <input type="text" name="_id" disabled defaultValue={this.props._id} onChange={this.handleChange} className="form-control" placeholder="studentid" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Name</label>
                                            <input type="text" name="name" defaultValue={this.props.name} onChange={this.handleChange} className="form-control" placeholder="name" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Register No</label>
                                            <input type="text" name="registrationNumber" defaultValue={this.props.registrationNumber} onChange={this.handleChange} className="form-control" placeholder="registrationNumber" />
                                        </div>
                                        {/*
                                        <div className="mb-3">
                                            <label>Department</label>
                                            <select id="options" name="department" defaultValue={this.props.department} onChange={this.handleChange} className="form-control">
                                                <option>Select</option>
                                                <option value="Computer Application">Computer Application</option>
                                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            </select>
                                        </div>*/}
                                        <div className="mb-3">
                                            <label>Course</label>
                                            <input type="text" name="course" defaultValue={this.props.course} onChange={this.handleChange} className="form-control" placeholder="course"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Semester</label>
                                            <input type="text" name="semester" defaultValue={this.props.semester} onChange={this.handleChange} className="form-control" placeholder="semester"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Year</label>
                                            <input type="text" name="year" defaultValue={this.props.year} onChange={this.handleChange} className="form-control" placeholder="year"/>
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
