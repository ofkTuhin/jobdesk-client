import ErrorPage from "./Components/Error";
import Header from "./Components/Header";
import Home from "./Components/Home";
import JobSingle from "./Components/JobSingle";
import Login from "./Components/Login";
import Private from "./Components/Private";
import Base from "./Layout/Base";
import data from "./data/jobpost.json";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <div className="text-2xl">Blog Hello world!</div>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/job/:id",
          element: (
            <Private>
              <JobSingle />
            </Private>
          ),
          errorElement: <ErrorPage />,
          loader: ({ params }) => {
            return data.find((item) => item.id == params.id);
          },
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}

export default App;
