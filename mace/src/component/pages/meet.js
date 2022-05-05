import React,{Component} from 'react';

const meetGet ="http://localhost:8020/meet";

class Meet extends Component{
    constructor(props){
        super(props)
        this.state = {
            course:'',
            semester: '',
            meet_Link:'',
        }
    }
    
    renderTable =(meetData)=> {
        if(meetData){
            return meetData.map((item,index)=>{
                return (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.course}</td>
                        <td>{item.semester}</td>
                        <td>{item.meet_Link}</td>
                    </tr>
                )
            })
        }
    }
        
    render() {
        return (
            <>
            <p className="heading">Meet Links </p>
            <div className ="container">
                
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Course</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Meet Link</th>
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


export default Meet;