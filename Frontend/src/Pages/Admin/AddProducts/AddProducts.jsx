import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../Context/Context";
import "./AddProducts.css"
import { BASE_URL } from "../../../Services/api/constants";
const AddProducts = () => {
  const { setProducts } = useContext(MainContext);
  return (
    <div className="general__admin">
      <Formik
        initialValues={{
          image: "",
          title: "",
          price: "",
          category: "",
          description: "",
          detImg: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });
          axios
            .post(`${BASE_URL}/products`,formData, { headers: {
              "Content-Type": "multipart/form-data",
            }, })
            .then((res) => {
              setProducts(res.data);
              console.log(res.data);
            }).catch((error) => {
              console.error("There was an error uploading the data!", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form id="products__form" onSubmit={handleSubmit}>
            <input
              type="file"
              name="image"
              placeholder="Image"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <input
              type="text"
              name="detImg"
              placeholder="Detail Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.detImg}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;
