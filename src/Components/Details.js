import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { useParams } from 'react-router';

function Details() {
    let {id} = useParams();
const [user,setUser] = useState({});
const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>  {setUser(res.data);setLoading(false)})
        .catch ((err)=> console.log (err));

    },[]);

    
    return (
        <div>
            {loading ? 'Please wait...':
            <div>
                <h1>{user.email}</h1>
                </div>}
        </div>
    )
    }
    
export default Details
