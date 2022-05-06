import React,{Component} from 'react';
import HodHeader from '../hodHeader';
import New  from './new';
import Edit from './edit';

const studentGet ="http://localhost:4000/api/auth/student";
// const studentGet= "http://localhost:8020/student";
class HodStudent extends Component{
    constructor(props){
        super(props)
        this.state = {
            _id:'',
            name:'',
            registrationNumber:'',
            department: '',
            course: '',
            semester: '',
            year:'',
        }
    }
     edit = (data) =>{
        console.log(data, "item clicked")
     }
     renderTable =(studentData)=> {
        if(studentData){
            return studentData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.registrationNumber}</td>
                        <td>{item.department}</td>
                        <td>{item.course}</td>
                        <td>{item.semester}</td>
                        <td>{item.year}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ (param) => this.setState({
                                _id:item._id,
                                name:item.name,
                                registrationNumber:item.registrationNumber,
                                // department:item.department,
                                course:item.course,
                                semester:item.semester,
                                year:item.year

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;
                            <Edit _id={this.state._id}
                                name={this.state.name}
                                registrationNumber={this.state.registrationNumber}
                                // department={this.state.department}
                                course={this.state.course}
                                semester={this.state.semester}
                                year= {this.state.year}
                                />
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
            <HodHeader/>
            <p className="heading">Students </p>
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
                        <th scope="col">Register No</th>
                        <th scope="col">Department</th>
                        <th scope="col">Course</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.studentData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(studentGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({studentData:data})
            console.log(data);
        })
    }
}


export default HodStudent;