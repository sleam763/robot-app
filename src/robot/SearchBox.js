import React from 'react'

const SearchBox=({onSearch})=>{
    return(
        <div id='box'>
            <h1>RoboFriend</h1>
            <input onChange={onSearch} type='text' placeholder='search robot'/>
        </div>
    )
};

export default SearchBox;