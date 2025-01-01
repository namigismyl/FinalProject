import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../../Services/api/constants";
import "./NewsDetails_table.css";
import MainContext from "../../../Context/Context";

const NewsDetails_table = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { setNews } = useContext(MainContext);

  useEffect(() => {
    axios.get(`${BASE_URL}/newswire/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  const handleDelete = async () => {
    const confirmResult = window.confirm("Are you sure you want to delete this item?");
  
    if (confirmResult) {
      try {
        await axios.delete(`${BASE_URL}/newswire/${id}`).then(res=>{
          setNews(res.data); 
          setItem({})
          alert("Deleted successfully!");
          navigate("/admin/newswire");
        })
  
      } catch (error) {
        alert("Error deleting the item!");
      }
    } else {
      alert("Deletion canceled.");
    }
  };
  

  return (
    <div className="general__admin newsDetailsTable__div">
      <div className="container newsDetailsTable__container">
        <h1>Details Table</h1>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <p>{item._id}</p>
              </td>
            </tr>
            <tr>
              <td>Images</td>
              <td className="adminDetails__images">
                {item.images?.map((image, index) => {
                  return <img src={image} alt="" width={"120px"} key={index} />;
                })}
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <p>{item.category}</p>
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <p>{item.title}</p>
              </td>
            </tr>
            <tr>
              <td>Head Description</td>
              <td>
                <p>{item.detailsHeadDesc}</p>
              </td>
            </tr>
            <tr>
              <td>Main Description</td>
              <td>
                <p>{item.detailsMainDes}</p>
              </td>
            </tr>
            <tr>
              <td>Second Title</td>
              <td>
                <p>{item.detailSecTitle}</p>
              </td>
            </tr>
            <tr>
              <td>Second Description</td>
              <td>
                <p>{item.detailSecDes}</p>
              </td>
            </tr>
            <tr>
              <td>Third Title</td>
              <td>
                <p>{item.detailRdTitle}</p>
              </td>
            </tr>
            <tr>
              <td>Third Description</td>
              <td>
                <p>{item.detailRdDes}</p>
              </td>
            </tr>
            <tr>
              <td>Actions</td>
              <td>
                <div className="action-buttons">
                  <button className="btn btn-edit">Edit</button>
                  <button className="btn btn-delete" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsDetails_table;
