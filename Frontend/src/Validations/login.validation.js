import * as Yup from "yup";
const loginValidation = Yup.object().shape({
    password: Yup.string().required(),
    email: Yup.string().email().required() ,
})
export default loginValidation