import React, { useContext, useEffect, useState } from "react";

import FormLists from "../components/FormLists";
import { HeaderContext } from "../components/Header/HeaderProvider";

const Forms = () => {
  const [forms, setForms] = useState([]);
  const { updateHeaderData } = useContext(HeaderContext);

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/forms`);
      const data = await response.json();
      setForms(data);
    };
    fetchForms();
  }, []);

  useEffect(() => {
    updateHeaderData("Dashboard", [{ name: "Add Form", link: "/forms/add", style: "btn" }]);
  }, []);

  return (
    <div>
      <h1>Forms</h1>
      <FormLists forms={forms} />
    </div>
  );
};

export default Forms;
