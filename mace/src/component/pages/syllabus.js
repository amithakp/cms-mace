import React,{Component} from 'react';

const reliefCenterGet ="http://localhost:8121/reliefCenter";

class Syllabus extends Component{
    constructor(props){
        super(props)
        this.state = {
            disaster_reliefCenterid:'',
            contact_Number:'',
            reliefCenterName: '',
            totalAccomodation:'',
            vaccancy:'',
            ReliefCenterData:'',
            // index:''
        }
    }
    //  edit = (data) =>{
    //     console.log(data, "item clicked")
    //  }
     renderTable =(ReliefCenterData)=> {
        if(ReliefCenterData){
            return ReliefCenterData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.reliefCenterName}</td>
                        <td>{item.contact_Number}</td>
                        <td>{item.totalAccomodation}</td>
                        <td>{item.vaccancy}</td>
                        <td>
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
                           
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <p className="heading">Syllabus </p>
            <div className ="container">
                
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Department</th>
                        <th scope="col">Course</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderTable(this.state.ReliefCenterData)}   */}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    componentDidMount(){
        fetch(reliefCenterGet, {method:'GET'})
        .then((res) => res.json ())
        .then((data) => {
            this.setState({ReliefCenterData:data})
            console.log(data);
        })
    }
}


export default Syllabus;