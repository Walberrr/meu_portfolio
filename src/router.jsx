import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import BullsAndCows from "./pages/BullsAndCows";
import Movies from "./pages/Movies"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
    children: [
      { path: "/", element: <Portfolio /> }, // Torne a página Portfolio a inicial
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/bulls-and-cows", element: <BullsAndCows /> },
      { path: "/movies", element: <Movies /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
