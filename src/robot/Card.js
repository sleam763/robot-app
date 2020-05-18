import React from 'react'

const Card=({id,name,email,username,phone})=>{
    return(
        <div id='card'>
            <img alt='robot' src={`https://robohash.org/${id}`}/>
            <div>
                <h1><a href='user'>{name}</a></h1>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
};

export default Card;