import React, { useContext, useEffect } from "react";

import { HeaderContext } from "../components/Header";
import { FormEditor } from "../components/Form";

const AddForm = () => {
  const { updateHeaderData } = useContext(HeaderContext);

  useEffect(() => {
    updateHeaderData("Add Form", [{ name: "Forms", link: "/forms" }]);
  }, []);

  return (
    <div className='page-wrapper'>
      <FormEditor />
    </div>
  );
};

export default AddForm;
