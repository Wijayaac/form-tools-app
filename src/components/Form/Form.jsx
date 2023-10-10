import React from "react";
import { useParams } from "react-router-dom";

const Form = () => {
  const params = useParams();
  const { formId } = params;

  return <div>form {formId && formId}</div>;
};

export default Form;
