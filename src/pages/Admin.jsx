import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  const [data, setdata] = useState([])
  const [selectValue, setSelectValue] = useState("normal")
  const [search, setSearch] = useState(" ")

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(res => setdata(res.data));
  }, [])


  const deleteData=function(id){
    axios.delete('http://localhost:3000/data/'+id)
    .then(res=>setdata(res.data));
}
  //get delete
const sortData=function(){
  if(selectValue=="a-z"){
    return data.toSorted((a,b)=>a.name.localeCompare(b.name))
  }
  else if(selectValue=="z-a"){
      return data.toSorted((a,b)=>b.name.localeCompare(a.name))
    }
    else{
      return[...data]
    }
}
let sortedData=sortData()

const filteredData=sortedData.filter(item=>{
  return item.name.toLowerCase().startsWith(search.toLowerCase())
})


  return (
    <div>
        <select onChange={(e)=>setSelectValue(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

      <Link to='/add'> <button>Add new item</button></Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Content</th>
            <th>Learn</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img src={item.img}/></td>
                  <td>{item.content}</td>
                  <td>{item.learn}</td>
                  <td><button onClick={() => deleteData()}>delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Admin