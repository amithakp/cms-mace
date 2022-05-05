import React,{Component} from 'react';
import AdminHeader from '../adminHeader';
import New  from './new';
import Edit from './edit';

const facultyGet ="http://localhost:4000/api/auth/teacher";

class Faculty extends Component{
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
     edit = (data) =>{
        console.log(data, "item clicked")
     }
     renderTable =(facultyData)=> {
        if(facultyData){
            return facultyData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.registrationNumber}</td>
                        <td>{item.department}</td>
                        <td>{item.course}</td>
                        <td>{item.subject}</td>
                        {/* <td>{item.password}</td> */}
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ () => this.setState({
                                 name:item.name,
                                 email:item.email,
                                 department:item.department,
                                 course:item.course,
                                 subject:item.subject,
                                //  password:item.password

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;
                            <Edit contact_Number={this.state.name}
                                email= {this.state.email}
                                department={this.state.department}
                                course={this.state.course}
                                subject={this.state.subject}
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
            <p className="heading">Faculty </p>
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
                        <th scope="col">Course</th>
                        <th scope="col">Subject</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.facultyData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(facultyGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({facultyData:data})
            console.log(data);
        })
    }
}

export default Faculty;

