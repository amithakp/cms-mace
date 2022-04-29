import React,{Component} from 'react';
import TeacherHeader from '../teacherHeader';

const reliefCenterGet ="http://localhost:8121/reliefCenter";

class TeacherAssignment extends Component{
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid:'',
            contact_Number:'',
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:'',
            ReliefCenterData:'',
        }
    }
   
     renderTable =(ReliefCenterData)=> {
        if(ReliefCenterData){
            return ReliefCenterData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.reliefCenterName}</td>
                        <td>{item.contact_Number}</td>
                        <td>{item.totalAccomodation}</td>
                        <td>{item.vaccancy}</td>
                        
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <TeacherHeader/>
            <p className="heading">Assignment</p>
            <div className ="container">
               
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Course</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Upload</th>
                        <th scope="col">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.ReliefCenterData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(reliefCenterGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefCenterData:data})
            console.log(data);
        })
    }
}


export default TeacherAssignment;
    