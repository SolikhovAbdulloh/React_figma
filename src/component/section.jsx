import React from 'react'
import "./cards.css"
function Section() {
    let data = ["Assalomu",'Aleykum']
  return (
        <div className='contiener'>
            {data.map(value=>{
            <div className='value'>{value}</div>
        })}
        </div>


  )
  }


export default Section