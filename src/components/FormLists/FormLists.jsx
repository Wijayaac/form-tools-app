import React from "react";

import FormItem from "./FormItem";

import style from "./FormLists.module.css";

const FormLists = ({ forms }) => {
  return (
    <div className={style.lists}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.grid}>
            <span>ID</span>
            <span>Form</span>
            <span>Source Code</span>
            <span>Copy token</span>
            <span>Action</span>
          </div>
        </div>
        <div className={`${style.content}`}>
          {forms.map((form, idx) => {
            return <FormItem key={form.id} form={form} idx={idx + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FormLists;
