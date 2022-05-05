import React,{Component} from 'react';
import AdminHeader from '../adminHeader';
import './bus.css';
// import New  from './new';
// import Edit from './edit';

const busGet ="http://localhost:8020/bus";

class AdminBus extends Component{
    constructor(props){
        super(props)
        this.state = {
            bus_No:'',
            bus_Route:'',
            morning_Time: '',
            evening_Time: '',
        }
    }
    //  edit = (data) =>{
    //     console.log(data, "item clicked")
    //  }
     renderTable =(busData)=> {
        if(busData){
            return busData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.bus_No}</td>
                        <td>{item.bus_Route}</td>
                        <td>{item.morning_Time}</td>
                        <td>{item.evening_Time}</td>
                        {/* <td>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button  type="button" onClick={ () => this.setState({
                                bus_No:item.bus_No,
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
            <p className="heading">Bus</p>
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
                        <th scope="col">Bus No.</th>
                        <th scope="col">Bus Route</th>
                        <th scope="col">Morning Time</th>
                        <th scope="col">Evening Time</th>
                        {/* <th scope="col">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.busData)}  
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(busGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({busData:data})
            console.log(data);
        })
    }
}


export default AdminBus;