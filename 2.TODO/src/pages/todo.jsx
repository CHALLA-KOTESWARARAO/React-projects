import { useState } from 'react'
function Todo(){
    const[name,setName]=useState('')
    const[dis,setDis]=useState([])
    const[edi,setEdi]=useState(null)

const set=(e)=>{
    setName(e.target.value)
 }
const subMit=(e)=>{
    e.preventDefault()
    if (name.trim()==='') return
    setDis([...dis,name])
    setName('')}

const delet = (index) => {
    let newList = [...dis]     
    newList.splice(index, 1)   
    setDis(newList)           
  }

  return(
    <div>
        <div class='form'>
      <form onSubmit={subMit}>
        <input type="text" onChange={set} value={name} />
        <button type="submit">submit</button>
    </form></div>
    
    <table border="1" cellPadding="10" >
  <thead>
    <tr>
      <th>Item</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {dis.map((item, index) => (
      <tr key={index}>
        <td>{item}</td>
        <td>
          <button onClick={() => delet(index)}>DELETE</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  )
}

export default Todo