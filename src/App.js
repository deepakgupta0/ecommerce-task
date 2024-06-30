import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./app/store";
import Error404 from "./components/Error404/Error404";
import Layout from "./components/Layout/Layout";
import ProductListing from "./components/ProductListing/ProductListing";
import "react-toastify/dist/ReactToastify.css";

const Cart = lazy(() => import("./components/Cart/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<>Loading....</>}>
            <Cart />,
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  console.log("App");
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </>
  );
}
export default App;
