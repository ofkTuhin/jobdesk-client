import Header from "./Components/Header";
import Home from "./Components/Home";
import Base from "./Layout/Base";
import data from "./data/jobpost.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <div className="text-2xl">Blog Hello world!</div>,
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
