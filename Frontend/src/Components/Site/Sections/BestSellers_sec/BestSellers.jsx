import React from 'react'
import "./BestSellers.css"
import Cards from './Cards/Cards'
const BestSellers = ({products}) => {
  return (
    <section className='sellers'>
      <div className="custom-container sellers-container" >
        <div className="row" style={{margin:"0 auto"}}>
            <div className="col-12">
              <h2>Best Sellers</h2>
            </div>
        </div>
        <Cards products={products}/>
        
      </div>
    </section>
  )
}

export default BestSellers
