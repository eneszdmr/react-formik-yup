import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFromSchemas";

function RegisterForm() {
  function submitFonksiyonu(values, action) {
    console.log(values);

    setTimeout(() => {
      action.resetForm();
    }, 2200);
  }
  const { handleChange, values, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submitFonksiyonu,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputSpace">
          <label>email adresi</label>
          <input
            type="text"
            placeholder="email giriniz"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors && <p className="input-error">{errors.email}</p>}
        </div>
        <div className="inputSpace">
          <label>Yaş</label>
          <input
            type="number"
            placeholder="Yaş giriniz"
            id="age"
            value={values.age}
            onChange={handleChange}
          />
          {errors && <p className="input-error">{errors.age}</p>}
        </div>
        <div className="inputSpace">
          <label>Şifre</label>
          <input
            type="password"
            placeholder="Şifre giriniz"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors && <p className="input-error">{errors.password}</p>}
        </div>

        <div className="inputSpace">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            placeholder="Şifre Tekrar giriniz"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors && <p className="input-error">{errors.confirmPassword}</p>}
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <input
            style={{ width: "20px", height: "20px", marginRight: "20px" }}
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label>Kullanıcı Sözleşmesini onaylıyorum</label>
        </div>
        {errors && <p className="input-error">{errors.term}</p>}
        <button type="submit" className="kaydetButton">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
