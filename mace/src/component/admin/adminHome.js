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
                                <div class="card">
                                    <FontAwesomeIcon icon={faBus} class="card-img-top" alt="bus"/>
                                    <div class="card-body">
                                        <h5 class="card-title">BUS</h5>
                                        <p class="card-text">You can find your Bus route here.</p>
                                        <Link to ="/adminBus" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faLink} class="card-img-top" alt="meet link"/>
                                    <div class="card-body">
                                        <h5 class="card-title">MEET LINK</h5>
                                        <p class="card-text">You can find your Meet link here.</p>
                                        <Link to ="/adminMeet" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faBuildingUser} class="card-img-top" alt="department"/>
                                    <div class="card-body">
                                        <h5 class="card-title">DEPARTMENT</h5>
                                        <p class="card-text">You can find your Department here.</p>
                                        <Link to ="/adminDepartment" class="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default AdminHome