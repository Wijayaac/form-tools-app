import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderContext } from "../components/Header";
import { FormEditor } from "../components/Form";

const DetailForm = () => {
  const { updateHeaderData } = useContext(HeaderContext);

  const { formId } = useParams();
  // get form data by formId
  const form = getFormById(formId);

  function getFormById(formId) {
    return {
      id: 1,
      name: "Form 1",
      fields: [
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
      ],
    };
  }

  useEffect(() => {
    updateHeaderData("Form Detail", [{ name: "Forms", link: "/forms" }]);
  }, []);
  return (
    <div>
      <FormEditor form={form} />
    </div>
  );
};

export default DetailForm;
