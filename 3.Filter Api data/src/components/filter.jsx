import React,{useState,useEffect} from "react";
import axios from 'axios';
import "./filter.css";

function Filter(){
    const [Data,setData]=useState([])
 const[load,setLoad]=useState(true)
 const [gender,setGender]=useState('all')
 useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{setData(res.data.users);
      setLoad(false)
    })
    .catch((err)=>{console.log(err);
      setLoad(false)
    })
    
 },[])
const gen=(e)=>{
    setGender(e.target.value);
}
const Fdata= gender === 'all'? Data:Data.filter((item)=>item.gender===gender)
if(load){
  return <h1>Loading.....</h1>
}
 return <div>
    <select onChange={gen} value={gender}>
        <option value='all'>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
    </select>
    <table border='5px' cellPadding='5px' cellSpacing='5px'>
        <tr>
            <th>firstName</th>
            <th>age</th>
            <th>gender</th>
            <th>role</th>
            <th>country</th>
        </tr>
  {Fdata.map(
    (item)=>(
        <tr key={item.id}>
           <td>{item.firstName}</td>
           <td>{item.age}</td>
           <td>{item.gender}</td>
           <td>{item.role}</td>
           <td>{item.address.country}</td> </tr>
        ))};

      </table>

 </div>
}
export default Filter;
