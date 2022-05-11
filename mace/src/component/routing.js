import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './Login/login';
import AdminLogin from './admin/Login/login';
import AdminRegister from './admin/Login/register';

// hod login
import HODLogin from './Home/hodLogin/login';
import TeacherLogin from './Home/teacherLogin/login';
import StudentLogin from './Home/studentLogin/login';
//Home 
import Department from './Home/department';
import HomeMaceUpdation from './Home/maceUpdation';

import Home from './home';
import AdminHome from './admin/adminHome';

import AdminBus from './admin/bus/bus';
import AdminMeet from './admin/meet/meet';
import AdminDepartment from './admin/department/department';
import Student from './admin/student/student';
import HOD from './admin/hod/hod';
import Faculty from './admin/faculty/faculty';
import ContactUs from './admin/contactUs';
import Contact from './pages/contact';
// import Syllabus from './pages/syllabus';
// import AdminSyllabus from './admin/syllabus/syllabus';
import Updation from './pages/updation';
import MaceUpdation from './admin/maceUpdation/maceUpdation';

// student
import StudentHome  from './student/studentHome';
import StudentBus from './student/Bus/bus';
import StudentMeet from './student/Meet/meet';
import StudentTimetable from './student/TimeTable/timeTable';
import Notes from './student/Notes/notes';
import Assignment from './student/Assignment/assignment';
import Marks from './student/Marks/marks';

// teacher
import TeacherHome  from './teacher/teacherHome';
import TeacherBus from './teacher/Bus/bus';
import TeacherMeet from './teacher/Meet/meet';
import TeacherTimeTable from './teacher/TimeTable/timeTable';
import TeacherNotes from './teacher/Notes/noteNew';
import TeacherAssignment from './teacher/Assignment/assignment';
import TeacherMarks from './teacher/Marks/marks';
// import Chat from './teacher/chat/chat';
// hod
import HodHome  from './hod/hodHome';
import HodBus from './hod/Bus/bus';
import HodMeet from './hod/Meet/meet';
import HodTimeTable from './hod/TimeTable/timeTable';
import HodStudent from './hod/student/student';
import HodMarks from './hod/Marks/marks';
// import Edit from './hod/student/edit';
const Routing = () => {
    return(
        <BrowserRouter>
            <Route  path="/login" component={Login} />
            <Route  path="/admin" component={AdminLogin} />
            <Route  path="/adminRegister" component={AdminRegister} />

            <Route path="/hodLogin" component={HODLogin}/>
            <Route path="/teacherLogin" component={TeacherLogin}/>
            <Route path="/studentLogin" component={StudentLogin}/>

            <Route  path="/department" component={Department}/>
            <Route  path="/maceupdation" component={HomeMaceUpdation}/>



            <Route exact path="/" component={Home}/>
            <Route  path="/adminredirect" component={AdminHome}/>
            <Route  path="/adminBus" component={AdminBus}/>
            <Route  path="/adminMeet" component={AdminMeet}/>
            <Route  path="/adminDepartment" component={AdminDepartment}/>
            <Route  path="/adminStudent" component={Student}/>
            <Route  path="/adminHod" component={HOD}/>
            <Route  path="/adminfaculty" component={Faculty}/>
            <Route  path="/contactUs" component={ContactUs}/>
            <Route  path="/contact" component={Contact}/>
            {/* <Route  path="/adminSyllabus" component={AdminSyllabus}/> */}
            {/* <Route  path="/syllabus" component={Syllabus}/> */}
            <Route  path="/updation" component={Updation}/>
            <Route  path="/adminMaceUpdation" component={MaceUpdation}/>

            {/* student */}
            <Route  path="/studentredirect" component={StudentHome}/>
            <Route  path="/bus" component={StudentBus}/>
            <Route  path="/meet" component={StudentMeet}/>
            <Route  path="/timetable" component={StudentTimetable}/>
            <Route  path="/studentNotes" component={Notes}/>
            <Route  path="/studentAssignment" component={Assignment}/>
            <Route  path="/studentMarks" component={Marks}/>

            {/* teacher */}
            <Route  path="/teacherredirect" component={TeacherHome}/>
            <Route  path="/teacherBus" component={TeacherBus}/>
            <Route  path="/teacherMeet" component={TeacherMeet}/>
            <Route  path="/teacherTimeTable" component={TeacherTimeTable}/>
            <Route  path="/teacherNotes" component={TeacherNotes}/>
            <Route  path="/teacherAssignment" component={TeacherAssignment}/>
            <Route  path="/teacherMarks" component={TeacherMarks}/>
            {/* <Route path="/teacherChatroom" component={Chat}/> */}
            {/* hod */}
            <Route  path="/hodredirect" component={HodHome}/>
            <Route  path="/hodBus" component={HodBus}/>
            <Route  path="/hodMeet" component={HodMeet}/>
            <Route  path="/hodTimeTable" component={HodTimeTable}/>
            <Route  path="/hodStudent" component={HodStudent}/>
            {/* <Route  path="/hodStudent/:id" component={Edit}/> */}

            <Route  path="/hodMarks" component={HodMarks}/>
        </BrowserRouter>
    )
}
export default Routing;