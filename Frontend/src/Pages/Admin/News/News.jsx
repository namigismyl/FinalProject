import React, { useContext } from "react";
import "./News.css";
import MainContext from "../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../../Services/api/constants";
const News = () => {
  const { news, setNews } = useContext(MainContext);
  return (
    <div className="general__admin">
      <h2 style={{textAlign:"center",fontSize:"30px",marginTop:"40px",marginBottom:"40px"}}>Newswire</h2>
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
          className="table table-dark  newsTable" 
          style={{ margin: "auto", width: "95%"}}
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsAdminItem, index) => {
              return (
                <React.Fragment key={index}>
                <tr>
                  <th scope="row">{newsAdminItem._id}</th>
                  <td>
                    <img
                      style={{ width: "60px" }}
                      src={newsAdminItem.image}
                      alt=""
                    />
                  </td>
                  <td>{newsAdminItem.category}</td>
                  <td>{newsAdminItem.title}</td>
                  <td>{newsAdminItem.time}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={()=>axios.delete(`${BASE_URL}/newswire/${newsAdminItem._id}`).then(res=>{
                        setNews(res.data)
                      })}
                    >
                      Delete
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
