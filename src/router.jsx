import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import BullsAndCows from "./pages/BullsAndCows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/bulls-and-cows", element: <BullsAndCows /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
