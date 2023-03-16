import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './TodoItem.module.css';
import { CardHeader, Button } from '@mui/material';
import Image from 'next/image'
import NewTodoForm from './NewTodoForm';
import Link from 'next/link';
import { useState, useEffect } from 'react';


  function TodoItem(props) {
    const [data,setData] = useState([])
    useEffect( ()=>{
      fetch("http://localhost:3000/api/getex").then(res=>res.json()).then(mydata=>setData(mydata)).catch((err)=>{console.log(err)})
    },[])
    const router = useRouter();

     function showDetailsHandler() {
      router.push('/' + props.id)
     }
     
  return (
    <>
     <button  className={classes.addBtn}  ><Link href='/new-todo'>Add Activity</Link></button>
      {
        data.map((item)=>{
          
            return(
              <Card  style={{ width: '150px', // set the width to 300 pixels
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      
      }}>
       
        <h4 className={classes.cardTitle}>{item.activityType}</h4>
        <h1>{item.name}</h1>
          <Image
          // src="/swim.jpg"
          src={`/${item.activityType}.jpg`}
          alt="My Image"
          width={640}
          height={200}
        />
          <p>
            {item.description}
          </p>
          {/* <div className={classes.actions}>
          </div> */}
          <div>
          Date:{item.date}
          </div>
            
          <div> 
            <button  className={classes.dltBtn} >Delete</button>
           
            <button className={classes.editBtn}><Link href='/new-todo'>Edit</Link></button>
          </div>
      </Card>
      
            ) 
            
        })  
      }
    
      </>
    );
}

export default TodoItem;
// ======================================================================================
