import React, { useState, useEffect } from "react";
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import * as itemService from "../../utils/itemService";

export default function ItemList({ user, handleLogout }) {
    const [posts, setPosts] = useState([]); // <- likes are inside of the each post in the posts array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

// R read in crud
    async function getItems() {
        try {
        const data = await itemService.getAll();
        console.log(data, " this is data,");
        setPosts([...data.posts]);
        setLoading(false);
        } catch (err) {
        console.log(err.message, " this is the error");
        setError(err.message);
        }
    }

//export default function ItemsList() {
    
//    const [list, setList] = useState([]);
    
//    useEffect(async() => {
//      setList(await getAll());
//     }, []);
//     console.log(list, "<--this is the list")
     
//    return (
//        <>
//        <h1>This is the Items List</h1>
//        <ItemsCard items={list}/>
        
    
//        </>
//    );
//  }

//import React from "react";
//import ItemsCard from "../../components/ItemsCard/ItemsCard";

//export default function ItemsList() {

//    return (
//        <>
//        <ItemsCard items={items}/>
//        <h1>This is the Items List</h1>
    
//        </>
//    );
//  }