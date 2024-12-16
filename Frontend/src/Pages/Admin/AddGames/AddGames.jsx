import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../Context/Context";
import  "./AddGames.css"
import { BASE_URL } from "../../../Services/api/constants";

const AddGames = () => {
  const { setGames } = useContext(MainContext);
  return (
    <div className="general__admin">
      <Formik
        initialValues={{
          image: "",
          title: "",
          price: "",
          bigImg: "",
          nameImg: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });
          axios
            .post(`${BASE_URL}/games`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              setGames(res.data);
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
          <form onSubmit={handleSubmit} id="addgames__form">
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
              name="bigImg"
              placeholder="Hero Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bigImg}
            />
            <input
              type="text"
              name="nameImg"
              placeholder="Head Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nameImg}
            />
            <textarea
              name="description"
              placeholder="details des"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              rows={5}
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

export default AddGames;
