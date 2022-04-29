import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HodHeader extends Component{
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
                            <Link to ="/hodredirect" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/hodAttendance" className="nav-link" href="#">ATTENDANCE</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to ="/adminAchevements" className="nav-link" href="#">ACHIEVEMENTS</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to ="/hodMarks" className="nav-link" href="#">MARKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/hodChatroom" className="nav-link" href="#">CHATROOM</Link>
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

export default HodHeader;    