/* eslint-disable react/prop-types */
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom/dist";
import { useAuth } from "./Config/firebase";

// Layout
import RootLayout from "./Layout/RootLayout";

// Pages
import Home from "./pages/dashboard/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Expense from "./pages/dashboard/Expense";
import Budget from "./pages/dashboard/Budget";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  // get Current user
  const currentUser = useAuth();

  // Protected Routes
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const RedirectIfLoggedIn = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />

          <Route
            path="expenses"
            element={
              <RequiredAuth>
                <Expense />
              </RequiredAuth>
            }
          />
          <Route
            path="budget"
            element={
              <RequiredAuth>
                <Budget />
              </RequiredAuth>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="login"
          element={
            <RedirectIfLoggedIn>
              <Login />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          path="register"
          element={
            <RedirectIfLoggedIn>
              <Register />
            </RedirectIfLoggedIn>
          }
        /> 
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
