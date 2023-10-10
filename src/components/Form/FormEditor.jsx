import React from "react";
import { useFormik } from "formik";

import style from "./FormEditor.module.css";

const FormEditor = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      fields: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className={style.sidebar}>
        {/* TODO: add Sidebar wrapper for editor */}
        <div className={style.wrapper}>
          <div className={style.sidebarHeader}>
            <button type='submit' form='sidebarForm'>
              Submit
            </button>
            <form onSubmit={formik.handleSubmit} id='sidebarForm'>
              <label htmlFor='formName'>
                Form Name <span>*</span>
              </label>
              <input type='text' id='formName' name='name' onChange={formik.handleChange} defaultValue={formik.values.name} />
            </form>
          </div>
        </div>
      </div>
      <div className={style.editor}>{/* TODO: add Editor content */}</div>
    </>
  );
};

export default FormEditor;
