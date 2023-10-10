import React, { useState } from "react";
import { useFormik } from "formik";

import style from "./FormEditor.module.css";

const FormEditor = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className={style.editor}>
      <button type='submit' form='sidebarForm' className={style.submit}>
        Submit
      </button>
      <div className={style.sidebar}>
        {/* TODO: add Sidebar wrapper for editor */}
        <div className={style.wrapper}>
          <form onSubmit={formik.handleSubmit} id='sidebarForm'>
            <div className={style.input}>
              <label htmlFor='formName'>
                Form Name <span>*</span>
              </label>
              <input type='text' placeholder='Form Name' id='formName' name='name' onChange={formik.handleChange} defaultValue={formik.values.name} />
            </div>
          </form>
          <div className={style.content}>
            <p className={style.label}>Elements</p>
          </div>
          <div className={style.footer}>
            <button className={style.button} onClick={() => setIsOpen(true)}>
              Add Element
            </button>
            <button className={style.button}>Configurations</button>
          </div>
        </div>
        <PopupContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <p>Popup content</p>
        </PopupContainer>
      </div>
      <div className={style.editor}>{/* TODO: add Editor content */}</div>
    </div>
  );
};

const PopupContainer = ({ isOpen, setIsOpen }) => {
  // TODO: add handler to open and close the popup using useState

  return (
    <>
      {isOpen && (
        <div className='popup-container'>
          <div className='popup-header'>
            <button className='popup-close' onClick={() => setIsOpen(false)}>
              X
            </button>
            <div className='popup-title'>Popup title</div>
          </div>
          Popup container
        </div>
      )}
    </>
  );
};

export default FormEditor;
