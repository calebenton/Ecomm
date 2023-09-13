import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Inventory() {
    let {id} = useParams()
    const [inventoryObject, setinventoryObject] = useState({});
    const [items, setItems] = useState([])
    const [newItem, setNewItems] = useState("")

    /*
    useEffect(() => {
        axios.get(`http://localhost:3002/items/byId/${id}`).then((response) => {
            setinventoryObject(response.data);});}, [id]);

     useEffect(() => {
        axios.get(`http://localhost:3002/items/${id}`).then((response) => {
            setItems(response.data);});}, [id]);
            */
/*
    const addInventory = () => {
        axios.post("http://localhost:3002/items", {Name: newItem , id: id},
        {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            }
        }
        ).then((response) => {
            if (response.data.error){
                alert(response.data.error)
            } else{
        const itemToAdd = {Name: newItem, Quantity: response.data.Quantity}    
        setItems([...items, itemToAdd])
        setNewItems("")
            }
        })
    } 
*/

 /*
    return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post' id='individual'>
                <div className='title'>{inventoryObject.Name}</div>
                <div className='body'>{inventoryObject.Quantity}</div>
                <div className='footer'>{inventoryObject.id}</div>
            </div> 
        </div>
        <div className='rightSide'>
            <div className='addCommentContainer'> 
                <input type='text' placeholder='Leave a Comment!' autoComplete='off' value={newItem} onChange={(event) => {setNewItems(event.target.value)}} />
                <button onClick={addInventory}> Add Inventory </button>
            </div>
            <div className='listOfitems'>
                {items.map((item, key) => {
                    return <div key={key} className='comment'>{item.Name}: "{item.Quantity}" </div> 
                })}
            </div>
        </div>
        
    </div>
  )*/
}

export default Inventory