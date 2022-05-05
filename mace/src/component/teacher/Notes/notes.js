import React,{Component} from 'react';
import TeacherHeader from '../teacherHeader';

const teacherGet ="http://localhost:4000/api/auth/teacherInfo";
class TeacherNotes extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            course:'',
            subject:'',
            userData:'',
        }
    }
   
     renderTable =(userData)=> {
        if(userData){
            return userData.map((item,index)=>{
                console.log(userData)
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.course}</td>
                        <td>{item.subject}</td>
                        
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <TeacherHeader/>
            <p className="heading">Notes</p>
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
                        
                        <tr>
                            <td>{this.state.userData.index}</td>
                            <td>{this.state.userData.course}</td>
                            <td>{this.state.userData.subject}</td>
                        </tr>
                        {/* {this.renderTable(this.state.teacherGet)}   */}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(teacherGet,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}


export default TeacherNotes;
    