import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromBasket,decreaseBasket,increaseBasket } from "../../../Services/Redux/Slices/basketSlice";
const BasketTable = ({ basketItems }) => {
  let sum = 0;
  let count = 0;
  
    const dispatch = useDispatch()
  return (
    <div className="custom-container">
      <div className="row">
        <div className="col-12">
          <h3 className="basket__title">My Cart</h3>
        </div>
      </div>
      {basketItems && basketItems.length > 0 ? (
       <>
      <div className="row">
        <div className="col-12">
          <table class="table">
            <tbody>
              {basketItems.map((basketItem, index) => {
                sum += basketItem.totalPrice;
                count += basketItem.count;
                return (
                  <tr key={index}>
                    <td style={{ width: "160px" }}>
                      <div className="basket__img" style={{ width: "100%" }}>
                          <img
                            width="100%"
                            src={basketItem.item.image}
                            alt=""
                          />
                      </div>
                    </td>
                    <td>
                      <div className="basket__info">
                        <div className="basket__text">
                          <div className="basket__text__heading">
                            <Link>{basketItem.item.title}</Link>
                            <p>Price: €{basketItem.item.price}</p>
                          </div>
                          <div className="basket__text__body">
                          <div className="basket__text__body__increase">
                            <button onClick={()=>dispatch(decreaseBasket(basketItem.item))}>
                              <i class="fa-solid fa-caret-left"></i>
                            </button>
                            <p>{basketItem.count}</p>
                            <button onClick={()=>dispatch(increaseBasket(basketItem.item))}>
                              <i class="fa-solid fa-caret-right"></i>
                            </button>
                          </div>
                        <button  onClick={()=>dispatch(removeFromBasket(basketItem.item))} className="basket__removeBtn">Remove</button>

                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="subtotal__title">
            <span>Subtotal </span>
            <span>({count} items):</span>
            <span className=""> €{sum}</span>
          </div>
        </div>
      </div>
       </> 
      ):(
        <h1 style={{fontSize:"20px",color:"#fff",fontWeight:"bolder",borderTop:"2px solid rgb(255 255 255 / 20%)",paddingTop:"20px",marginTop:"10px"}}>Your cart is empty...</h1>
      )
    }
    </div>
  );
};

export default BasketTable;
