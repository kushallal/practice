import React, { useMemo } from 'react'
import { useState } from 'react';
import EngineerRows from './EngineerRows';
import PlaneRows from './PlaneRows';
import PaperRows from './PaperRows';

const PaperPlane = ()=> {
//paper states
const [prow,setProw] = useState([])
const [pname, setPname] = useState()
const [pnamearr,setPnamearr]= useState(['Select Paper'])
const [plen,setPlen]=useState('')
const [pheight,setPheight]=useState('')
//engineer states
const[erows,setErows]= useState([])
const [name,setName]= useState('')
const [namearr,setNamearr]= useState(['Select Engineer'])
const[age,setAge] = useState('')
const[exp,setExp]= useState('')

//plane description
const [planerows,setPlanerows] = useState([])
const [planename,setPlanename] = useState('')
const [planepaper,setPlanepaper] = useState('')
const [planeengineer,setPlaneengineer] = useState('')
const [compdate,setCompdate] = useState(null)

  return (
    <div>
        <table>
        <tr>
        <td>
        <form name="paperdes">
            <h1>Paper Description</h1>
            <label>Paper Type</label>
            <select value ={pname} onChange={(en)=>setPname(en.target.value)} required>
                <option disabled selected> 
                    Select Paper Type
                </option>
                <option > 
                    White Paper
                </option>
                <option>
                    Nepali Paper
                </option>
            </select>
            <br/>
            <label>Paper Length</label>
            <input 
            value={plen} 
            onChange={e=>{
                if(!isNaN(e.target.value))
                {
                    setPlen(e.target.value)
                }}} 
            type="numbers" required/>
            <br/>

            <label>Paper Height</label>
            <input 
            value={pheight} 
            onChange={e=>{
                if(!isNaN(e.target.value))
                {
                    setPheight(e.target.value)
                }}} 
            type="numbers" required/>
            <br/>
            <button 
            type="button" 
            onClick={()=>{
                if(pname && plen>0 && pheight>0){
                    setProw((old)=>[<PaperRows 
                                        name={pname} 
                                        len={plen} 
                                        height={pheight}/>,old])
                                    
                    if (pnamearr.length > 0){
                        setPnamearr((e)=>[e,pname])
                    }
                    else{
                        setPnamearr([pname])
                    }}

                else{alert("fields need values")}}}>Submit</button>
        </form>

        <table border="1">
            <tr>
                <td> 
                    Paper Type
                </td>
                <td> 
                    Paper Length
                </td>
                <td> 
                    Paper Width
                </td>
            </tr>
            {prow}
        </table>
        
    </td>
    
    <td>
        <form name="engineers">
            <h1>Engineer Description</h1>
            <label>Name</label>
            <input value ={name} onChange={(en)=>setName(en.target.value)} minlength="2" required/>
                
                
            <br/>
            <label>Age</label>
            <input 
            value={age} 
            onChange={e=>{
                if(!isNaN(e.target.value))
                {
                    setAge(e.target.value)
                }}} 
            type="numbers" required/>
            <br/>

            <label>Experience</label>
            <input 
            value={exp} 
            onChange={e=>{
                if(!isNaN(e.target.value))
                {
                    setExp(e.target.value)
                }}} 
            type="numbers" required/>
            <br/>
            <button 
            type="button" 
            onClick={()=>{
                if(name && age>0 && exp>0){
                    setErows((o)=>[<EngineerRows
                                        ename={name} 
                                        eage={age} 
                                        eexp={exp}/>,o])
                    if (namearr.length > 0){
                        setNamearr((e)=>[e,name])
                    }
                    else{
                        setNamearr([name])
                    }
                                    }

                else{alert("fields need values")}}}>Submit</button>
        </form>


        <table border="1">
            <tr>
                <td> 
                    Name
                </td>
                <td> 
                    Age          
                </td>
                <td> 
                    Experience
                </td>
            </tr>
            {erows}
        </table>
        
    </td>
    <td>
        <form name="planes">
            <h1>Planes Description</h1>
            <label>Plane Name</label>
            <input value={planename} onChange={e=>setPlanename(e.target.value)}/>
            <br/>
            <label>Paper Name</label>
                
                <select value={planepaper} onChange={e=>setPlanepaper(e.target.value)}required>
                   <option disabled selected> Choose Paper Name</option>
                    {pnamearr.map((el)=><option>{el}</option>)}
                                
                </select>
            <br/>
            <label>Engineer Name</label>
                
                <select value={planeengineer} onChange={e=>setPlaneengineer(e.target.value)} required>
                <option disabled selected> Choose Engineer Name</option>
                    {namearr.map((el)=><option>{el}</option>)}
                                
                </select>
            <br/>

            <label>Completion Date</label>
            <input 
            value={compdate} 
            onChange={e=>setCompdate(e.target.value)}
            type="date" required/>
            <br/>
            {planeengineer}{planename}{planepaper}{compdate}
            <button 
            type="button" 
            onClick={()=>{
                if(planename && planepaper && planeengineer && compdate){
                    setPlanerows((old)=>[<PlaneRows 
                                        name={planename} 
                                        paper={planepaper} 
                                        eng={planeengineer}
                                        cdate={compdate}/>,old])
                                    }

                else{alert("fields need values")}}}>Submit</button>
        </form>
        <form name="engineers">

        </form>

        <table border="1">
            <tr>
                <td>
                    Plane Name
                </td>
                <td> 
                    Paper Name
                </td>
                <td> 
                    Engineer Name
                </td>
                <td> 
                    Date of Completion
                </td>
            </tr>
            {planerows}
        </table>
        
    </td>
    </tr>
    </table>
    </div>
  )
}

export default PaperPlane