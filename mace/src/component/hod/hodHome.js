import React from 'react';
import { Link } from 'react-router-dom';
import HodHeader from './hodHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus, faLink, faRankingStar, faTableList, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

const HodHome = () => {
    return(
        <>
        <HodHeader/>
                <div className="card-container">
                    <div className="container">
                        <div className="row g-3">
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faBus} className="card-img-top" alt="bus"/>
                                    <div className="card-body">
                                        <h5 className="card-title">BUS</h5>
                                        <p className="card-text">You can find your Bus route here.</p>
                                        <Link to ="/hodBus" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faLink} className="card-img-top" alt="meet link"/>
                                    <div className="card-body">
                                        <h5 className="card-title">MEET LINK</h5>
                                        <p className="card-text">You can find your Meet link here.</p>
                                        <Link to ="/hodMeet" className="btn btn-primary">Click</Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faTableList} className="card-img-top" alt="department"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Time Table</h5>
                                        <p className="card-text">You can find your Time table here.</p>
                                        <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Click</a>

                                        {/* <Link to ="/hodTimeTable" class="btn btn-primary">Click</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faRankingStar} className="card-img-top" alt="department"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Results</h5>
                                        <p className="card-text">You can find your Result link here.</p>
                                        <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Click</a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="card">
                                    <FontAwesomeIcon icon={faBuildingColumns} className="card-img-top" alt="department"/>
                                    <div className="card-body">
                                        <h5 className="card-title">KTU SITE</h5>
                                        <p className="card-text">You can find your KTU site link here.</p>
                                        <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Click</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default HodHome;