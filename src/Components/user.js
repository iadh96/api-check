import React from 'react'
import {Link}from 'react-router-dom'


function User({user}) {
    return (
        <div>
<h1>{user.name}</h1>
<Link to={`/details/${user.id}`} ><button>details</button>

</Link>

        </div>
    )
}

export default User
