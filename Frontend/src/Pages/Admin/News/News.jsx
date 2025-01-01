import React, { useContext } from "react";
import "./News.css";
import MainContext from "../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../../Services/api/constants";
import { Link } from "react-router-dom";

const News = () => {
  const { news, setNews } = useContext(MainContext);
  return (
    <div className="general__admin">
      <h2 style={{textAlign:"center",fontSize:"30px",paddingTop:"40px",paddingBottom:"30px"}}>Newswire</h2>
      <div
        className="news__admin"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table
          className="table table-dark newsTable" 
          style={{ width: "80%"}}
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Details</th>
              <th scope="col">Activate/Deactivate</th> 
            </tr>
          </thead>
          <tbody>
            {news.map((newsAdminItem, index) => {
              return (
                <React.Fragment key={index}>
                <tr>
                  <th scope="row">{newsAdminItem._id}</th>
                  <td>
                    <img src={newsAdminItem.images?.[0]} width="60px" alt="" />
                  </td>
                  <td>{newsAdminItem.category}</td>
                  <td>{newsAdminItem.title}</td>
                  <td>{newsAdminItem.time}</td>
                  <td>
                    <Link to={`/admin/newswire/details/${newsAdminItem._id}`}
                      className="btn btn-warning"
                    >
                      Details
                    </Link>
                  </td>                  
                  <td>
                    <button className="btn btn-danger"
                    >
                      Deactivated
                    </button>
                  </td>
                </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default News;
