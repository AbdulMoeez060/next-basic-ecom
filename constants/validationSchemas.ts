import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().min(4).max(100).required(),
  lastName: yup.string().min(4).max(100).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export const signInValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
