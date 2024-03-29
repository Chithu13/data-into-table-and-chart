import React, { useState } from "react";
import Chart from "./Chart";
import { TableContainer, TableHead,TableBody,TableCell,TableRow,Table, TextField, Button } from "@material-ui/core";

 function TableChart(){

    const[subData,setSubData] = useState([]);
    const [finalData,setFinalData] = useState([]);

    function submitData(subData) {
        setFinalData(finalData=>[...finalData, subData]);
        setSubData(subData={});
        document.myForm.reset();
    }

    return(
        <div>
         <form name="myForm">
            
         <TableContainer style={{display:'flex', justifyContent: 'center'}}>
            <Table style={{width: '50%', justifyContent : 'center'}} size = "small">
            <TableHead>
                <TableRow>
                   
                    <TableCell><TextField  value = {subData['sub']} onChange={(e)=>setSubData({...subData, "sub": e.target.value})} label="Employee Name" margin="normal" variant="outlined" color="secondary"></TextField></TableCell>
                    <TableCell><TextField value = {subData['sem']} onChange={(e)=>setSubData({...subData, "sem": e.target.value})}label="Performance/10" margin="normal" variant="outlined" color="secondary"></TextField></TableCell>
<TableCell><Button variant="contained" onClick={()=>submitData(subData)} color="primary">Add Employee</Button></TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {finalData.map(data=> (
                    
                    <TableRow>
                        <TableCell>{data.sub}</TableCell>
                        <TableCell>{data.sem}</TableCell>
                    </TableRow>))}
            </TableBody>

            </Table>
         </TableContainer>
         </form>

<br/>
<Chart data={finalData}/>
        </div>

        
    
    )
}

export default TableChart;