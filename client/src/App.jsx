import ProtectedRouter from "./components/hoc/ProtectedRoute";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import AccountLoginPage from "./components/pages/AccountLoginPage";
import AccountNewPage from "./components/pages/AccountNewPage";
import ConstuctorPage from "./components/pages/ConstuctorPage";
import useUser from "./hooks/useUser";
import RunawayButton from "../src/components/ui/RunawayButton";
import SavedDesignsPage from "./components/pages/SavedDesignsPage";
import { DesignProvider } from "./components/ui/DesignContext";
import CartPage from "./components/pages/CartPage";
import ErrorPage from "./components/pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <MainPage RunawayButton={RunawayButton} user={user} />,
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status !== "logged"}
            />
          ),
          children: [
            {
              path: "/account/new",
              element: <AccountNewPage signUpHandler={signUpHandler} />,
            },
            {
              path: "/account/login",
              element: <AccountLoginPage signInHandler={signInHandler} />,
            },
          ],
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status === "logged"}
              redirect={"/"}
            />
          ),
          children: [
            {
              path: "/constructor",
              element: (
                <ConstuctorPage signInHandler={signInHandler} user={user} />
              ),
            },
            {
              path: "/saved-designs",
              element: <SavedDesignsPage />,
            },
            {
              path: "/cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <DesignProvider>
      <RouterProvider router={router} />
    </DesignProvider>
  );
}

export default App;