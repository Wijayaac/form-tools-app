import React from "react";
import { NavLink } from "react-router-dom";

const forms = [
  {
    id: 1,
    name: "Form 1",
  },
  {
    id: 2,
    name: "Form 2",
  },
  {
    id: 3,
    name: "Form 3",
  },
  {
    id: 4,
    name: "Form 4",
  },
  {
    id: 5,
    name: "Form 5",
  },
];

const FormLists = () => {
  return (
    <div>
      {forms.map((form) => {
        return (
          <div key={form.id}>
            <NavLink to={`/forms/${form.id}`}>{form.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default FormLists;
