import React, { useState } from 'react'
import './Search.css'
import SearchRst from './SearchRst';

function Search() {
    const [input , setInput]=useState("")


   const inputSearch=(event)=>{
      const data= event.target.value;
      setInput(data)
   }

    return (
        <>
        <div className="Searchbar">
            <input type="text" placeholder="Search Here...!"
             onChange={inputSearch} 
             value={input}/>
             {input==="" ? null:<SearchRst name={input}/>}
        </div>
        </>
    )
}

export default Search
