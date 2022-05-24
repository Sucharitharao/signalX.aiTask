import React from 'react'


export default function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {fullName, location, action}= data;
            return(
                <tr key={index}>
                <td>
               <input type="text" value={fullName} onChange={(evnt)=>(handleChange(index, evnt))} name="fullName" className="form-control"/>
                </td>
                <td><input type="text" value={location}  onChange={(evnt)=>(handleChange(index, evnt))} name="location" className="form-control"/> </td>
                <td><input type="text" value={action}  onChange={(evnt)=>(handleChange(index, evnt))} name="action" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>Remove</button></td>
            </tr>
            )
        })
   
    )
    
}
