import React,{Component} from 'react';
import TeacherHeader from '../teacherHeader';
import axios from 'axios';
import FileDownload  from 'js-file-download';

const note ="http://localhost:8020/upload";

class TeacherNotes extends Component{
    constructor(props){
        super(props)
        this.state = {
            // name:'',
            noteName:'',
            userData:'',
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
    
    render() {
        return (
            <>
            <TeacherHeader/>
            <p className="heading">Notes </p>
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <div className="col-md-12">
                            <div className="form-group">
                                <input className="form-control" name="name" 
                                value= {this.state.name} onChange={this.handleChange} placeholder="name" required/>
                            </div>
                        </div>  */}
                        <div className="mb-3">
                            <label><b>Note Name</b></label>
                            <input type="file" name="noteName" value={this.state.noteName} onChange={this.handleChange} className="form-control" placeholder="noteName"/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" onClick={this.handleADDStudent} className="btn btn-success d-grid gap-2 ">
                                Add
                            </button>
                        </div>
                        <br/>  
                        <div className="d-grid gap-2">
                            <button className="btn btn-warning" onClick={(e) => this.download(e)}>Download</button> 
                        </div>  
                    </div>
                </div>
            </div>
            </>
        )
    }
   
}


export default TeacherNotes;