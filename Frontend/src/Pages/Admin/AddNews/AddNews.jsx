import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import MainContext from "../../../Context/Context";
import { BASE_URL } from "../../../Services/api/constants";
import "./AddNews.css";

const AddNews = () => {
  const { setNews } = useContext(MainContext);

  const initialValues = {
    images: [],  
    category: "",
    time: "",
    title: "",
    detailsHeadDesc: "",
    detailsMainDes: "",
    detailSecTitle: "",
    detailSecDes: "",
    detailRdTitle: "",
    detailRdDes: "",
  };

  return (
    <div className="general__admin">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          Object.entries(values).forEach(([key, value]) => {
            if (key === "images") {
              Array.from(value).forEach((file) => {
                formData.append("images", file);
              });
            } else {
              formData.append(key, value);
            }
          });

          axios
            .post(`${BASE_URL}/newswire`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              setNews(res.data);
              console.log(res.data);
            })
            .catch((error) => {
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
        }) => (
          <form
            id="news__form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              margin: "0 auto",
              paddingTop:"60px",
              gap: "15px",
            }}
          >
            {/* Dinamik input sahələri */}
            {Object.keys(initialValues).map((key) => {
              if (key === "images") {
                // 'images' sahəsi üçün fayl yükləmə inputu
                return (
                  <input
                    key={key}
                    type="file"
                    name={key}
                    accept="images/*"
                    onChange={(e) => {
                      setFieldValue("images", e.currentTarget.files);
                    }}
                    multiple
                  />
                );
              }

              // Mətn və başlıq sahələri üçün 'text' input
              if (key.includes("Des") || key.includes("Title")) {
                if (key.includes("Des")) {
                  return (
                    <textarea
                      key={key}
                      name={key}
                      placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[key]}
                      rows={5}
                    />
                  );
                } else {
                  return (
                    <input
                      key={key}
                      type="text"
                      name={key}
                      placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[key]}
                    />
                  );
                }
              }

              return (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[key]}
                />
              );
            })}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNews;
