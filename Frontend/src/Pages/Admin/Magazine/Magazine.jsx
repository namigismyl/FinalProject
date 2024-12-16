import React, { useContext } from 'react'
import axios from 'axios'
import MainContext from "../../../Context/Context"
import { BASE_URL } from '../../../Services/api/constants'
const Magazine = () => {
  const {products,setProducts,games,setGames}=useContext(MainContext)
  return (
    <div className='general__admin'>
      <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"40px",fontSize:"30px"}}>Games</h2>
      <table
          className="table table-dark gamesTable" 
          style={{ margin: "auto", width: "80%"}}
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              games.map((gameItem,index)=>{
                return(
                <tr key={index}>
                  <th scope="row">{gameItem._id}</th>
                  <td>
                    <img
                      style={{ width: "60px" }}
                      src={gameItem.image}
                      alt=""
                    />
                  </td>
                  <td>{gameItem.title}</td>
                  <td>€{gameItem.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={()=>axios.delete(`${BASE_URL}/games/${gameItem._id}`).then(res=>{
                        setGames(res.data)
                      })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                )
              })
            }
          </tbody>
        </table>
      <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"40px",fontSize:"30px"}}>Products</h2>
        <table
          className="table table-dark  productsTable mt-5" 
          style={{ margin: "auto", width: "80%"}}
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
                
                {
                  products.map((productItem,index)=>{
                    return(
                      <tr key={index}>
                  <th scope="row">{productItem._id}</th>
                  <td>
                    <img
                      style={{ width: "60px" }}
                      src={productItem.image}
                      alt=""
                    />
                  </td>
                  <td>{productItem.title}</td>
                  <td>€{productItem.price}</td>
                  <td>{productItem.category}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={()=>axios.delete(`${BASE_URL}/products/${productItem._id}`).then(res=>{
                        setProducts(res.data)
                      })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                    )
                  })
                }
          </tbody>
        </table>
    </div>
  )
}

export default Magazine
