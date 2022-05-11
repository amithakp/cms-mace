import React, { Component } from 'react';

const note ="http://localhost:8020/notes";
// const studentRegister ="http://localhost:8020/upload"
class New  extends Component {
    constructor(props){
        super(props)
        this.state = {
            course:'',
            subject:'',
            noteName:'',
        }
    }
    handleADDStudent  = () =>{
        fetch(note,{
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

    fileChange = (event) => {
        // let noteName = event.target.files;
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
                                        <h2 className="text-center mb-4">Add Note</h2>
                                        <div className="mb-3">
                                            <label>course</label>
                                            <input type="text" name="course" value={this.state.course} onChange={this.handleChange} className="form-control" placeholder=" course"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>subject</label>
                                            <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} className="form-control" placeholder="subject"/>
                                        </div>
                                        <div className="mb-3">
                                            <label>noteName</label>
                                            <input type="file" name="noteName" value={this.state.noteName} onChange={this.fileChange} className="form-control" placeholder="noteName"/>
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
