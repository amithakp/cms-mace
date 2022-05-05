import React,{Component} from 'react';
// import {Redirect} from 'react-router';
import './login.css';
// import {isAuthenticated} from '../../../../disasterLogin/auth/authController';

const loginUrl ="http://localhost:5000/api/auth/login";
class Login extends Component {
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
            console.log("hghhhh",data)

            if(data.auth === false){
                this.setState({message:data.token})
            }
            else{
                // localStorage.setItem('ltk',data.token)
                // localStorage.setItem('role',data.role)
                // console.log("redirecting to volunteer")
                if(data.role === "Admin"){
                    this.props.history.push('/adminHeader')
                }else{
                    this.props.history.push('/volunteerHeader')

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
                    <span id="login-span">Login</span>
                    </div>
                    <div className="panel-body">
                    <div className ="message">{this.state.message}</div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label><b>Registration Number</b></label>
                                            <input className="form-control" name="registrationNumber" 
                                            value= {this.state.registrationNumber} onChange={this.handleChange} placeholder="name@example.com" required/>
                                        </div>
                                    </div> 
                                    {/* <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <input className="form-control" name="role" 
                                            value= {this.state.role} onChange={this.handleChange}  required/>
                                        </div>
                                    </div>  */}
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

export default Login;