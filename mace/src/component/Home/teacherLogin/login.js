import React,{Component} from 'react';
import '../../admin/Login/login.css';

const loginUrl ="http://localhost:4000/api/auth/teacherLogin";
class TeacherLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            registrationNumber:'',
            password:'',
            role:'',
            message:''
        }
    }
    
    handleSubmit = () => {
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })

        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.auth === false){
                this.setState({message:data.token})
            }
            else{
    
                if(data.role === "Teacher"){
                    localStorage.setItem('ltk',data.token)
                    this.props.history.push('/teacherredirect')
                }
            }
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <center>  
                <div className="container-fluid">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading text-center">
                    <span id="login-span">Teacher Login</span>
                    </div>
                    <div className="panel-body">
                    <div className ="message">{this.state.message}</div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Registration Number</label>
                                            <input className="form-control" name="registrationNumber" 
                                            value= {this.state.registrationNumber} onChange={this.handleChange} placeholder="registrationNumber" required/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password" 
                                             value= {this.state.password} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button  className="btn btn-success" onClick = {this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
   
}

export default TeacherLogin;