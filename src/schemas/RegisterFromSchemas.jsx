import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("geçerli mail adresi girin")
    .required("email adresi zorunlu"),
  age: yup
    .number()
    .positive("pozitif deger girin")
    .integer("tam sayı girin")
    .required("yaş zorunlu"),
  password: yup.string().required("şifre zorunlu"),
  confirmPassword: yup
    .string()
    .required("şifre tekrarı zorunlu")
    .oneOf([yup.ref("password", yup.password)], "şifreler aynı değil"),
  term: yup.boolean().required("lütfen sözleşmeyi onaylayınız"),
});
