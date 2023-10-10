import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Forms from "./routes/forms";

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
        path: "/forms/:formId",
        element: <Forms />,
      },
    ],
  },
]);
