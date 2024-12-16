import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import controller from "../../../Services/api/requests";
import { endpoints } from "../../../Services/api/constants";
import loginValidation from "../../../Validations/login.validation";
import { login } from "../../../Services/Redux/Slices/userSlice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MainContext from "../../../Context/Context";
import Cookies from "js-cookie";
const Login = () => {
  const { showPassword, handleClickShowPassword } = useContext(MainContext);
  const navigate = useNavigate("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [navigate, user]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ password, email }, actions) => {
      const response = await controller.post("/login", {
        email: email,
        password: password,
      })
      if (response.auth) {
        actions.resetForm();
        dispatch(login(response.user));
        // Token
        const token = response.token;
        Cookies.set("token", token, { expires: 1 });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
  });

  return (
    <div style={{ width: "35%", margin: "50px auto", paddingTop: "100px" }}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
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
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <Link to={"/register"} style={{color:"black"}}>Don't you have an account?</Link>
        <Button type="submit" variant="contained" color="primary" style={{width:"40%",padding:"8px 20px",background:"#E19808",color:"black",fontWeight:"bolder"}}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
