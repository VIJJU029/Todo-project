
//Use state hooks : it is used  to manage your state{data} in functional component
// declare hooks at the top level
//import usestate from 'react'
// const count = useState(intial value)
// usestate = variable, udating function




import './App.css';

import { useState,useRef } from 'react';

// state : Data
// uncontrolled {useref} vs controlled{use state}


function App() {
  const [list,setList]= useState([]);
  const [newtask,setNewTask] = useState('');
  const [search,setSearch] = useState('');
  //  console.log("re-render")

  // const newinput =(e)=>{

  //   setNewTask(e.target.value)

  // }

  const addtask =(e)=>{

    localStorage.setItem('lists',JSON.stringify([...list, newtask]))
     setList([...list, newtask])
     setNewTask(
      ''
     )

    // setNewTask("")
  }

  const deleteTask =(i)=>{
    const dellist =[...list];
    dellist.splice(i,1)
    setList(dellist)
    localStorage.setItem('lists',dellist)
  }
  const updateTask =(e,i)=>{
    const uptask =[...list];
    uptask.splice(i,1,e.target.value) 
    setList(uptask)
    localStorage.setItem('lists',uptask)

  }
  

  const searchfun =(val)=>{
    setSearch(val)

    
  }
  const keyEnter =(e)=>{
    if(e.key ==="Enter"){
      addtask()

    }
    
  }
  return (
    <div className='App'>

    <div className ="search">
    <input type='text' placeholder='search Task🔍' onChange={(e)=>{searchfun(e.target.value)}}></input>
    </div>
    



      <h1 className = "heading">To do App ⚡</h1>
   <div className ="inputs" >

  <input type = "text"
   onChange={(e)=>{setNewTask(e.target.value)}} 
   onKeyDown={keyEnter} value ={newtask} />
  <button className = "btn" onClick={addtask}>Add task👍</button>

 </div>

    <div className = "container">

      {
        list.map((val,i)=>{
        if(val.toLowerCase().includes(search.toLowerCase())){
          return(
            <div className ="list" key={i} >
        <input type ="text" value ={val}></input>
        <span className ="icon" onClick={()=>{deleteTask()}}
        >❌</span>
      </div>

          )
          
        }

          
        })

      }
      

    </div>
      
      </div>
    
  );
}

export default App;
