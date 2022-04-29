import React,{Component} from 'react';
// import './contactUs.css';
import AdminHeader from'./adminHeader';
import Contact from '../pages/contact';


class ContactUs extends Component{
    render() {
        return (
        <>        
        <AdminHeader/>
        <Contact/>
        {/* <div className="contact-main">
            <div className="container">
                <h2>MACE ADDRESS</h2>
                <hr/>
                <div className="clg-name">
                    <h3>MACE College Of Engineering</h3>
                    <h4>Admission Numbers:</h4>
                    <div>
                        <FontAwesomeIcon icon={faPhone}  alt="phone"/> &nbsp;
                        MTech: 9967855550<br/><hr/>
                        <FontAwesomeIcon icon={faPhone}  alt="phone"/> &nbsp;
                        MCA: 7767855590
                    </div>
                    <hr/>
                    <h4>Campus:</h4>
                    Thrissur P.O,Thrissur, 680588,Kerala, India<br/>
                    <FontAwesomeIcon icon={faPhone}  alt="phone"/> &nbsp;
                        9867855550<br/><hr/>
                    <FontAwesomeIcon icon={faEnvelope}  alt="phone"/> &nbsp;
                    mace@gmail.com<br/><hr/>
                </div>
            </div>
        </div> */}
        </>
        )
    }
    
}

export default ContactUs;