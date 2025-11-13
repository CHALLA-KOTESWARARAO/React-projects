import { useState,useEffect} from "react";
import axios from 'axios'
function Fetch(){
 const [Data,setData]=useState([])
 const[load,setLoad]=useState(true)
 useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{setData(res.data.users);
      setLoad(false)
    })
    .catch((err)=>{console.log(err);
      setLoad(false)
    })
    
 },[])
if(load){
  return <h1>Loading.....</h1>
}
 return <div>
 
  {Data.map(
    (item)=>(
      <ul key={item.id}>
        <li>{item.firstName}</li><li>{item.email}</li><hr></hr>
      </ul>
    ))}
 </div>
}

export default Fetch;