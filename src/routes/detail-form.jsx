import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HeaderContext } from "../components/Header";
import { FormEditor } from "../components/Form";

const DetailForm = () => {
  const { updateHeaderData } = useContext(HeaderContext);

  const { formId } = useParams();
  const [form, setForm] = useState({});
  // get form data by formId

  useEffect(() => {
    updateHeaderData("Form Detail", [{ name: "Forms", link: "/forms" }]);
  }, []);

  useEffect(() => {
    async function getFormById(formId) {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/forms/${formId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setForm(data);
      } catch (error) {
        throw new Error(error);
      }
    }

    getFormById(formId);
  }, []);

  return (
    <div>
      <FormEditor form={form} />
    </div>
  );
};

export default DetailForm;
