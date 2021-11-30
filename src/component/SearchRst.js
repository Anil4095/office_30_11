import React from 'react'

function SearchRst(props) {
    const img=`https://source.unsplash.com/300x400/?${props.name}`
    return (
        <div>
            <img src={img} alt="IMG"/>
        </div>
    )
}

export default SearchRst
