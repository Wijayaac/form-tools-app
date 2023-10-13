import React, { useState } from "react";
import { useFormik } from "formik";

import style from "./FormEditor.module.css";

const fields = [
  {
    id: 1,
    name: "Text",
    type: "text",
    placeholder: "Text",
    required: false,
  },
  {
    id: 2,
    name: "Email",
    type: "email",
    placeholder: "Email",
    required: false,
  },
  {
    id: 3,
    name: "Number",
    type: "number",
    placeholder: "Number",
    required: false,
  },
  {
    id: 4,
    name: "Date",
    type: "date",
    placeholder: "Date",
    required: false,
  },
  {
    id: 5,
    name: "Time",
    type: "time",
    placeholder: "Time",
    required: false,
  },
  {
    id: 6,
    name: "Password",
    type: "password",
    placeholder: "Password",
    required: false,
  },
  {
    id: 7,
    name: "Checkbox",
    type: "checkbox",
    placeholder: "Checkbox",
    required: false,
  },
  {
    id: 8,
    name: "Radio",
    type: "radio",
    placeholder: "Radio",
    required: false,
  },
  {
    id: 9,
    name: "Select",
    type: "select",
    placeholder: "Select",
    required: false,
  },
  {
    id: 10,
    name: "Textarea",
    type: "textarea",
    placeholder: "Textarea",
    required: false,
  },
];

const FormEditor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [selectedField, setSelectedField] = useState({
    name: "",
    id: 1,
    name: "Text",
    type: "text",
    placeholder: "Text",
    required: false,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      fields: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // handle save field when edited
  const fieldFormik = useFormik({
    initialValues: {
      name: "",
      placeholder: "",
      required: false,
    },
    onSubmit: (values) => {
      console.log(values, "field");
    },
  });

  const handleFieldEditor = (field) => {
    // TODO: add field random id so we can select it later when editing
    setSelectedField(field);
    formik.setFieldValue("fields", [...formik.values.fields, field]);
    setIsFieldOpen(true);
  };
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
              <input
                type='text'
                placeholder='Form Name'
                id='formName'
                name='name'
                onChange={formik.handleChange}
                defaultValue={formik.values.name}
              />
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
        <PopupContainer
          isOpen={isOpen}
          title='Add New Element'
          setIsOpen={setIsOpen}>
          <div className={style["option-wrapper"]}>
            {fields.map((field) => (
              <button
                key={field.id}
                className={style.option}
                onClick={() => handleFieldEditor(field)}>
                <img src={`/${field.type}.svg`} alt='' />
                {field.name}
              </button>
            ))}
          </div>
        </PopupContainer>
        <PopupContainer
          title={selectedField.name}
          isOpen={isFieldOpen}
          setIsOpen={setIsFieldOpen}>
          <div className={style["field-wrapper"]}>
            <form onSubmit={fieldFormik.handleSubmit}>
              <div className={style.input}>
                <label htmlFor='fieldName'>
                  Field Name <span>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Field Name'
                  id='fieldName'
                  name='name'
                  onChange={fieldFormik.handleChange}
                  defaultValue={fieldFormik.values.name}
                />
              </div>
              <div className={style.input}>
                <label htmlFor='fieldPlaceholder'>Placeholder</label>
                <input
                  type='text'
                  placeholder='Placeholder'
                  id='fieldPlaceholder'
                  name='placeholder'
                  onChange={fieldFormik.handleChange}
                  defaultValue={fieldFormik.values.placeholder}
                />
              </div>
              <div className={style.input}>
                <label htmlFor='fieldRequired'>Required</label>
                <input
                  type='checkbox'
                  id='fieldRequired'
                  name='required'
                  onChange={fieldFormik.handleChange}
                  defaultValue={fieldFormik.values.required}
                />
              </div>
              <button className={style.submit}>Save Field</button>
            </form>
          </div>
        </PopupContainer>
      </div>
      <div className={style.content}>{/* TODO: add Editor content */}</div>
    </div>
  );
};

const PopupContainer = ({ title, isOpen, setIsOpen, children }) => {
  // TODO: add handler to open and close the popup using useState

  return (
    <>
      {isOpen && (
        <div className='popup'>
          <div className='popup-container'>
            <div className='popup-header'>
              <button className='popup-close' onClick={() => setIsOpen(false)}>
                {/* TODO: Update icon to iconf font */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m15 6l-6 6l6 6'
                  />
                </svg>
              </button>
              <div className='popup-title'>{title || "Popup title"}</div>
            </div>

            <div className='popup-content'>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormEditor;
