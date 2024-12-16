import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import User from "../../../Classes/User";
import userValidation from "../../../Validations/user.validation";
import controller from "../../../Services/api/requests";
import { endpoints } from "../../../Services/api/constants";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";
import MainContext from "../../../Context/Context";
import "./SignUp.css"

const Signup = () => {
  const navigate = useNavigate("");
  const user = useSelector((state) => state.user);
  const {
    showPassword,
    showConfirmPassword,
    handleClickShowPassword,
    handleClickShowConfirmPassword
  } = useContext(MainContext);

  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [navigate, user]);
  function handleImageChange (event,setFieldValue){
    const file =event.currentTarget.files[0]
    setFieldValue('src',file)
  }
  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      password: "",
      confirm__password: "",
      src: "",
      // role:"",
    },
    validationSchema: userValidation,
    onSubmit: async ({ nickname, password, email, src }, actions) => {
      const formData = new FormData()
      const newUser = new User(nickname, password, email, src);
      formData.append('nickname',newUser.nickname)
      formData.append('password',newUser.password)
      formData.append('email',newUser.email)
      formData.append('src',newUser.src)
      formData.append('isBanned',newUser.isBanned)
      formData.append('banCount',newUser.banCount)
      const response = await controller.post(endpoints.users, formData);
      if (response.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        actions.resetForm();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User signed up successfully",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/login");
        });
      }
    },
  });



  return (
    <div style={{ width: "35%", margin: "50px auto", paddingTop: "100px" }} className="form__general">
      <form className="signUp-form"
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <TextField
          value={formik.values.nickname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="nickname"
          label="Nickname"
          type="text"
          variant="outlined"
          required
        />
        {formik.touched.nickname && formik.errors.nickname && (
          <span style={{ color: "red" }}>{formik.errors.nickname}</span>
        )}
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          required
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility/> :  <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <TextField
          value={formik.values.confirm__password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="confirm__password"
          label="Confirm password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> :  <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.confirm__password &&
          formik.errors.confirm__password && (
            <span style={{ color: "red" }}>
              {formik.errors.confirm__password}
            </span>
          )}
        <TextField
          onChange={(event)=>{
            handleImageChange(event,formik.setFieldValue)
          }}
          onBlur={formik.handleBlur}
          name="src"
          type="file"
          variant="outlined"
          id="src"
          required
        />
        {formik.touched.src && formik.errors.src && (
          <span style={{ color: "red" }}>{formik.errors.src}</span>
        )}
        <Link to={"/login"} style={{color:"black"}}>Do you have an account?</Link>
        <Button style={{width:"40%",padding:"8px 20px",background:"#E19808",color:"black",fontWeight:"bolder"}} type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
