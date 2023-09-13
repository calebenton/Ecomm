import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const[listOfItems, setlistOfItems] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3002/items").then((response) => {
        setlistOfItems(response.data);
        })
      }, []);



  return (
    <div>      
        {listOfItems.map((value, key) => { 
        return (
        <div key={key} className="post" onClick={() => {navigate(`/item/${value.id}`)}}> 
          <div className="title"> {value.Name}</div>
          <div className="body"> {value.Quantity}</div>
        </div>
        );
      })}
    </div>
  )
}

export default Home