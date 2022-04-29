import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomeHeader extends Component{
    render() {
        return (
        <>  
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary ">
            <div className="container-fluid">
                <Link to = "#" className="navbar-brand"> MACE COLLEGE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ="/home" className="nav-link" href="#">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/studentredirect" className="nav-link" href="#">STUDENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/faculty" className="nav-link" href="#">FACULTY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/adminredirect" className="nav-link" href="#">ADMIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/department" className="nav-link" href="#">DEPARTMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/syllabus" className="nav-link" href="#">SYLLABUS</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to ="/achevements" className="nav-link" href="#">ACHIEVEMENTS</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to ="/maceupdation" className="nav-link" href="#">MACE UPDATION</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/contact" className="nav-link" href="#">CONTACT US</Link>
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

export default HomeHeader;    