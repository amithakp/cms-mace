// import React,{Component} from 'react';
// import TeacherHeader from '../teacherHeader';

// const teacherGet ="http://localhost:4000/api/auth/teacherInfo";
// class TeacherNotes extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name:'',
//             course:'',
//             subject:'',
//             userData:'',
//         }
//     }
   
//      renderTable =(userData)=> {
//         if(userData){
//             return userData.map((item,index)=>{
//                 console.log(userData)
//                 return (
//                     <tr key={item._id}>
//                         <th scope="row">{index + 1}</th>
//                         <td>{item.course}</td>
//                         <td>{item.subject}</td>
                        
//                     </tr>
//                 )
//             })
//         }
//     }
        
//     render() {
//         return (
//             <>
//             <TeacherHeader/>
//             <p className="heading">Notes</p>
//             <div className ="container">
               
//                 <table className="table table-hover table-light">
//                     <thead>
//                         <tr>
//                         <th scope="col">No.</th>
//                         <th scope="col">Course</th>
//                         <th scope="col">Subject</th>
//                         <th scope="col">Upload</th>
//                         <th scope="col">Download</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                        
//                         <tr>
//                             <td>{this.state.userData.index}</td>
//                             <td>{this.state.userData.course}</td>
//                             <td>{this.state.userData.subject}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             </>
//         )
//     }
//     componentDidMount(){
//         fetch(teacherGet,{
//             method:'GET',
//             headers:{
//                 'x-access-token':localStorage.getItem('ltk')
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             this.setState({
//                 userData:data
//             })
//         })
//     }
// }


// export default TeacherNotes;
import React,{Component} from 'react';
import TeacherHeader from '../teacherHeader';
import New  from './new';
import axios from 'axios';
import FileDownload  from 'js-file-download';
// import Edit from './edit';

const noteGet ="http://localhost:8020/notes";
class TeacherNotes extends Component{
    constructor(props){
        super(props)
        this.state = {
            course:'',
            subject:'',
            noteName:'',
            userData:'',
        }
    }
     download=(e) => {
        e.preventDefault()
        axios({
            url: "http://localhost:8020/noteDownloaded",
            method: 'GET',
            responseType:"blob"
        }).then((res) => {
            console.log(res)
            FileDownload(res.data,"download.txt")
        })
    }
     renderTable =(noteData)=> {
        if(noteData){
            return noteData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.course}</td>
                        <td>{item.subject}</td>
                        <td>{item.noteName}</td>

                        {/* <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ (param) => this.setState({
                                _id:item._id,
                                course:item.course,
                                subject:item.subject,
                                noteName:item.noteName

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;
                            <Edit _id={this.state._id}
                                course={this.state.course}
                                subject={this.state.subject}
                                noteName={this.state.noteName}
                                />
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </td> */}
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <TeacherHeader/>
            <p className="heading">Notes </p>
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
                        <th scope="col">Course</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Note Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.noteData)}  
                    </tbody>
                </table>
                <button onClick={(e) => this.download(e)}>Download</button> 
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(noteGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({noteData:data})
            console.log(data);
        })
    }
}


export default TeacherNotes;