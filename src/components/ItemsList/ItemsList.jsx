import React from 'react';
import ItemsCard from "../ItemsCard/ItemsCard";
import Loader from '../Loader/Loader'


export default function ItemsList(items) { 
    console.log(items, "<---- this is the props for ItemsList")

    return (
        <>
        <h1>This is the Items List</h1>
        
        <ItemsCard items={items}/>
        </>
    )
    }