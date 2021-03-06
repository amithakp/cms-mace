import React from 'react';
import './adminHome.css';
import { Link } from 'react-router-dom';
import AdminHeader from './adminHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus, faLink, faBuildingUser } from '@fortawesome/free-solid-svg-icons'

const AdminHome = () => {
    return(
        <>
        <AdminHeader/>
                <div className="card-container">
                    <div className="container">
                        <div className="row g-3">
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faBus} className="card-img-top" alt="bus"/>
                                    <div className="card-body">
                                        <h5 className="card-title">BUS</h5>
                                        <p className="card-text">You can find your Bus route here.</p>
                                        <Link to ="/adminBus" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faLink} className="card-img-top" alt="meet link"/>
                                    <div className="card-body">
                                        <h5 className="card-title">MEET LINK</h5>
                                        <p className="card-text">You can find your Meet link here.</p>
                                        <Link to ="/adminMeet" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faBuildingUser} className="card-img-top" alt="department"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Department</h5>
                                        <p className="card-text">You can find your Department here.</p>
                                        <Link to ="/adminDepartment" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faCalendar} className="card-img-top" alt="timetable"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Time Table</h5>
                                        <p className="card-text">You can find your Timetable here.</p>
                                        <Link to ="/adminTimetable" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        </>
    )
}
export default AdminHome