import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const url ="http://localhost:4000/api/auth/teacherInfo";
class TeacherHeader extends Component{
    constructor(props){
        super()
         this.state={
            userdata:''
         }
    }
    handleLogout = () => {
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }
    render() {
        return (
        <>  
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary ">
            <div className="container-fluid">
                {/* <Link to = "" className="navbar-brand" > MACE COLLEGE</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to ="/teacherredirect" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                                <Link to ="/teacherNotes" className="nav-link" href="#">NOTES</Link>
                            </li>
                        <li className="nav-item">
                            <Link to ="/teacherAssignment" className="nav-link" href="#">ASSIGNMENT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/teacherAttendance" className="nav-link" href="#">ATTENDANCE</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to ="/adminAchevements" className="nav-link" href="#">ACHIEVEMENTS</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to ="/teacherMarks" className="nav-link" href="#">MARKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/teacherChatroom" className="nav-link" href="#">CHATROOM</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <button  onClick={this.handleLogout} className="btn btn-danger" type="submit">Log Out</button>
                </form>
            </div>
        </nav>
         </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
}

export default withRouter(TeacherHeader);    