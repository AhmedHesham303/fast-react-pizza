import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "mean",
    element: <Menu />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
