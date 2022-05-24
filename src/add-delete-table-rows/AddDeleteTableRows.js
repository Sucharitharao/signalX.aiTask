import { useState } from "react"
import TableRows from "./TableRows"



export default function AddDeleteTableRows(){
    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            fullName:'',
            Location:'',
            Action:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Full Name</th>
                          <th>Location</th>
                          <th>Action</th>
                          
                      </tr>
                    </thead>
                   <tbody>
                       <td><input/></td>
                       <td><input/></td>
                       <td><input/></td>
                       <td><button className="btn btn-outline-success" onClick={addTableRows} >ADD</button></td>
                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
