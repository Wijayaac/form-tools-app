import { createBrowserRouter } from "react-router-dom";

import FormLists from "./components/FormLists";
import Form from "./components/Form";
import Root from "./routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/forms",
        element: <FormLists />,
      },
      {
        path: "/forms/:formId",
        element: <Form />,
      },
    ],
  },
]);
