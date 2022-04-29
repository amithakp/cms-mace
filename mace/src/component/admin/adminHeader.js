import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class AdminHeader extends Component{
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
                            <Link to ="/adminredirect" className="nav-link">HOME</Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                STUDENT
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to="/mca" class="dropdown-item" href="#">MCA</Link></li>
                                <li><Link to="/mtech" class="dropdown-item" href="#">MTech</Link></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                                <Link to ="/adminStudent" className="nav-link" href="#">STUDENT</Link>
                            </li>
                        <li className="nav-item">
                            <Link to ="/adminFaculty" className="nav-link" href="#">FACULTY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/adminDepartment" className="nav-link" href="#">DEPARTMENT</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to ="/adminAchevements" className="nav-link" href="#">ACHIEVEMENTS</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to ="/adminMaceUpdation" className="nav-link" href="#">MACE UPDATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/adminSyllabus" className="nav-link" href="#">SYLLABUS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/adminChatroom" className="nav-link" href="#">CHATROOM</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="contactus" className="nav-link" href="#">CONTACT US</Link>
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

export default AdminHeader;    