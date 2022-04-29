import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class StudentHeader extends Component{
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
                            <Link to ="/studentRedirect" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                                <Link to ="/studentNotes" className="nav-link" href="#">NOTES</Link>
                            </li>
                        <li className="nav-item">
                            <Link to ="/studentAssignment" className="nav-link" href="#">ASSIGNMENT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/studentAttendance" className="nav-link" href="#">ATTENDANCE</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to ="/adminAchevements" className="nav-link" href="#">ACHIEVEMENTS</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to ="/studentMarks" className="nav-link" href="#">MARKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/adminChatroom" className="nav-link" href="#">CHATROOM</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                        <Link to="/registerVolunteer"  className="btn btn-success">Login</Link>
                </form>
            </div>
        </nav>
         </>
        )
    }
    
}

export default StudentHeader;    