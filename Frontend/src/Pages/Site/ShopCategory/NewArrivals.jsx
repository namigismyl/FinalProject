import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../Context/Context";
import "./ShopCategory.css";

const NewArrivals = () => {
  const category = "New Arrivals";
  const { products,sort,handleSortChange } = useContext(MainContext);
  return (
    <div className="newarrivals__cat">
      <div className="custom-container">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="col-6">
            <div className="shop__card__title">
              <h2>New Arrivals</h2>
            </div>
          </div>
          <div className="col-6 sortByCol">
            <div className="sortBy">
              <p>Sort By...</p>
              <select name="sort" id="sort" onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="a-z">Name: A-Z</option>
                <option value="z-a">Name: Z-A</option>
                <option value="low-to-high">Price: low to high</option>
                <option value="high-to-low">Price: high to low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {products
            .filter((item) => item.category === category)
            .sort((a, b) => {
              if (!sort) {
                return 0;
              } else if (sort.asc == true) {
                return a[sort.field] > b[sort.field]
                  ? 1
                  : b[sort.field] > a[sort.field]
                  ? -1
                  : 0;
              } else if (sort.asc == false) {
                return a[sort.field] < b[sort.field]
                  ? 1
                  : b[sort.field] < a[sort.field]
                  ? -1
                  : 0;
              }
            })
            .map((product, index) => {
              return (
                <div className="col-3" key={index}>
                  <Link to={`/shop/products/details/${product._id}`}>
                    <div
                      className="card mb-4"
                      style={{ width: "100%", height: "95%" }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body" style={{ padding: "20px" }}>
                        <h3 className="card-title">{product.title}</h3>
                        <p style={{ fontSize: "16px", color: "#e8e8e8" }}>
                          €{product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
