import React from 'react'
import Card from '../Card/Card'

const Cards = ({products}) => {
  return (
    <div className='row' style={{margin:"0 auto"}}>
      {
        products.filter(item=>item.category === "Grand Theft Auto").map((product,index)=>{
          return(
            <Card product={product} key={index}/>
          )
        }
        )
      }
    </div>
  )
}

export default Cards
