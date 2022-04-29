import React,{Component} from 'react';
import AdminHeader from '../adminHeader';
import Syllabus from '../../pages/syllabus';


class AdminSyllabus extends Component{
    
    render() {
        return (
            <>
            <AdminHeader/>
            <Syllabus/>
            </>
        )
    }
}


export default AdminSyllabus;