import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Forms from "./routes/forms";
import AddForm from "./routes/add-form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/forms",
        element: <Forms />,
      },
      {
        path: "/forms/add",
        element: <AddForm />,
      },
      {
        path: "/forms/:formId",
        element: <Forms />,
      },
    ],
  },
]);
