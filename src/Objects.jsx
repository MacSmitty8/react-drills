import React from 'react'

function Objects() {
    const zuko ={
        firstName: 'Zuko',
        age: 15,
        email: 'something@hotmail.com'
    }
    //const{firstName, age, email} = zuko

    return Object.keys(zuko).map((key, index)=>{
    return (
       <h2>
        {key}: {zuko[key]}
       </h2>
    )
    })
}
export default Objects;