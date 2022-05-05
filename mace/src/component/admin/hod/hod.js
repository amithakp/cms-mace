import React,{Component} from 'react';
import AdminHeader from '../adminHeader';
import New  from './new';
import Edit from './edit';

const hodGet ="http://localhost:4000/api/auth/hod";

class HOD extends Component{
    constructor(props){
        super(props)
        this.state = {
            // _id:'',
            name: '',
            email: '',
            registrationNumber: '',
            department:'',
            password: '',
            role: ''
        }
    }
     edit = (data) =>{
        console.log(data, "item clicked")
     }
     renderTable =(hodData)=> {
        if(hodData){
            return hodData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.registrationNumber}</td>
                        <td>{item.department}</td>
                        {/* <td>{item.password}</td> */}
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ () => this.setState({
                                // _id:item._id,
                                name:item.name,
                                email:item.email,
                                department:item.department,
                                // password:item.password

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;
                            <Edit name={this.state.name}
                                email= {this.state.email}
                                department={this.state.department}
                                password={this.state.password}/>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <AdminHeader/>
            <p className="heading">HOD </p>
            <div className ="container">
                <div className="new-container">
                    {/* <Link to="reliefCenter/addNew" className="btn btn-primary">New</Link> */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New
                    </button>
                </div>
                <New/>
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Register No</th>
                        <th scope="col">Department</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.hodData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(hodGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({hodData:data})
            console.log(data);
        })
    }
}


export default HOD;