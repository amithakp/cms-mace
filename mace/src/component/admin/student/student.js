import React,{Component} from 'react';
import AdminHeader from '../adminHeader';


const studentGet ="http://localhost:4000/api/auth/student";

class Student extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            registrationNumber:'',
            department: '',
            course: '',
            semester: '',
            year:'',
        }
    }
    //  edit = (data) =>{
    //     console.log(data, "item clicked")
    //  }
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
                        
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <AdminHeader/>
            <p className="heading">Students </p>
            <div className ="container">
                
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


export default Student;