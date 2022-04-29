import React from 'react';
import '../student/studentHome.css';
import { Link } from 'react-router-dom';
import TeacherHeader from './teacherHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus, faLink, faRankingStar, faTableList, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

const TeacherHome = () => {
    return(
        <>
        <TeacherHeader/>
                <div className="card-container">
                    <div className="container">
                        <div className="row g-3">
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faBus} class="card-img-top" alt="bus"/>
                                    <div class="card-body">
                                        <h5 class="card-title">BUS</h5>
                                        <p class="card-text">You can find your Bus route here.</p>
                                        <Link to ="/teacherBus" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faLink} class="card-img-top" alt="meet link"/>
                                    <div class="card-body">
                                        <h5 class="card-title">MEET LINK</h5>
                                        <p class="card-text">You can find your Meet link here.</p>
                                        <Link to ="/teacherMeet" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faTableList} class="card-img-top" alt="department"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Time Table</h5>
                                        <p class="card-text">You can find your Time table here.</p>
                                        <Link to ="/teacherTimeTable" class="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faRankingStar} class="card-img-top" alt="department"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Results</h5>
                                        <p class="card-text">You can find your Result link here.</p>
                                        <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" class="btn btn-primary" target="_blank">Click</a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="card">
                                    <FontAwesomeIcon icon={faBuildingColumns} class="card-img-top" alt="department"/>
                                    <div class="card-body">
                                        <h5 class="card-title">KTU SITE</h5>
                                        <p class="card-text">You can find your KTU site link here.</p>
                                        <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" class="btn btn-primary" target="_blank">Click</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default TeacherHome;