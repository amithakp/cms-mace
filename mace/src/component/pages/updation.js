import React,{Component} from 'react';

import './updation.css';

class Updation extends Component{
    render() {
        return (
        <>
        <p className="heading">MACE Updation</p>
        <div className="notification-Container" >
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                            <p className="head-text">Notifications</p>
                            <div className="notification">
                                <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" className="btn btn-primary" target="_blank" rel="noreferrer noopener">University Examinations</a>
                                <hr/>
                                <a href ="https://ktu.edu.in/home.htm;jsessionid=564C9D57428BB814DA4E81A691C6FAD6" className="btn btn-primary" target="_blank" rel="noreferrer noopener">University Examination Results Published</a>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <p className="head-text">Circular</p>
                            <div className="circular">
                                <div className="circular-sub">
                                    <p>Class Suspended from 1/may/2022 to 5/may/2022</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>       
        </>
        )
    }
    
}

export default Updation;