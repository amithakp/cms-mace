import React, { Component } from 'react';

const editReliefCentre ="http://localhost:8121/reliefCenter";

class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid:'',
            contact_Number:'',
            disaster_id: 1,
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:''
        }
    }
    handleUpdateReliefCentre  = (event) =>{
        fetch(editReliefCentre,{
            method:'PUT',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                contact_Number:event.target.contact_Number.value,
                reliefCenterName:event.target.reliefCenterName.value,
                totalAccomodation:event.target.totalAccomodation.value,
                vaccancy:event.target.vaccancy.value
            })
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result,"inside handleEditReliefCentre")
            this.setState({[this.state.contact_Number]:event.target.contact_Number,
                [this.state.reliefCenterName]:event.target.reliefCenterName,
                [this.state.totalAccomodation]:event.target.totalAccomodation,
                [this.state.vaccancy]:event.target.vaccancy
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
                                        <div className="mb-3">
                                            <label>Register No</label>
                                            <input type="text" name="busNo" defaultValue={this.props.contact_Number} onChange={this.handleChange} className="form-control" placeholder="Contact Number" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Department</label>
                                            <input type="text" name="busNo" defaultValue={this.props.contact_Number} onChange={this.handleChange} className="form-control" placeholder="Contact Number" />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" onClick={this.handleUpdateReliefCentre} className="btn btn-success d-grid gap-2 ">
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
