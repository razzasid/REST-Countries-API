import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router";
import App from "./App";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Error from "./Components/Error";
import CountryDetail from "./Components/CountryDetail";
import Loader from "./Components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
      {
        path: "/shimmer",
        element: <Loader />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </>
// );
