import React,{Component} from 'react';
import AdminHeader from '../adminHeader';
// import New  from './new';
// import Edit from './edit';

const meetGet ="http://localhost:8020/meet";

class AdminMeet extends Component{
    constructor(props){
        super(props)
        this.state = {
            course:'',
            semester: '',
            meet_Link:'',
        }
    }
    //  edit = (data) =>{
    //     console.log(data, "item clicked")
    //  }
     renderTable =(meetData)=> {
        if(meetData){
            return meetData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.course}</td>
                        <td>{item.semester}</td>
                        <td>{item.meet_Link}</td>
                        {/* <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ () => this.setState({
                                contact_Number:item.contact_Number,
                                reliefCenterName:item.reliefCenterName,
                                totalAccomodation:item.totalAccomodation,
                                vaccancy:item.vaccancy

                                })} 
                                className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                            </button>&nbsp;&nbsp;
                            <Edit contact_Number={this.state.contact_Number}
                                reliefCenterName= {this.state.reliefCenterName}
                                totalAccomodation={this.state.totalAccomodation}
                                vaccancy={this.state.vaccancy}/>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </td> */}
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <AdminHeader/>
            <p className="heading">Meet Links </p>
            <div className ="container">
                <div className="new-container">
                    {/* <Link to="reliefCenter/addNew" className="btn btn-primary">New</Link> */}
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New
                    </button> */}
                </div>
                {/* <New/> */}
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Course</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Meet Link</th>
                        {/* <th scope="col">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.meetData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(meetGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({meetData:data})
            console.log(data);
        })
    }
}


export default AdminMeet;