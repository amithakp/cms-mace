import React,{ Component} from 'react';
import './register.css';

const registerUrl ="http://localhost:4000/api/auth/adminRegister";

class AdminRegister extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
            registrationNumber:'',
            password:'',
            role:'Admin',
            message:''
        }
    }

    handleSubmit = () => {
        if (this.state.name === "") {
            this.setState({message:'please enter your name'})
        } else if (this.state.email === "") {
            this.setState({message:"Please Enter E-Mail"}) 
        } else if (this.state.registrationNumber === "") {
            this.setState({message:"Please Enter Registration Number"}) 
        } else if (this.state.password === "") {
            this.setState({message:"Please Enter Password"})
        } else {
            fetch(registerUrl,{
                method:'POST',
                headers:{
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/admin'))  
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return (
            <center>
                <div className="container-fluid">
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                            <span>Register</span>
                        </div>
                        <div className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" name="name" 
                                            value={this.state.name} onChange={this.handleChange} placeholder="Name" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" required/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Registration Number</label>
                                            <input className="form-control" name="registrationNumber" 
                                            value={this.state.registrationNumber} onChange={this.handleChange} placeholder="Registration Number" required/>
                                        </div>
                                    </div> 
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password" 
                                            value={this.state.password} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button  className="btn btn-success" onClick={this.handleSubmit}>
                                        Register
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

export default AdminRegister;