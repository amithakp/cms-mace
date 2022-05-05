import React,{Component} from 'react';
import '../admin/bus/bus.css';

const busGet ="http://localhost:8020/bus";

class Bus extends Component{
    constructor(props){
        super(props)
        this.state = {
            bus_No:'',
            bus_Route:'',
            morning_Time: '',
            evening_Time: '',
        }
    }
   
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
                        
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <p className="heading">Bus</p>
            <div className ="container">
               
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Bus No.</th>
                        <th scope="col">Bus Route</th>
                        <th scope="col">Morning Time</th>
                        <th scope="col">Evening Time</th>
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

export default Bus;