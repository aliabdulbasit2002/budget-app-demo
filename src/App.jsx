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

import Dashboard from "./Pages/dashboard/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Expense from "./pages/dashboard/Expense";
import Budget from "./pages/dashboard/Budget";

const App = () => {
  // get Current user
  const currentUser = useAuth();
  // console.log(currentUser);

  // Protected Routes
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const RedirectIfLoggedIn = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        />
        <Route path="expenses" element={<Expense />} />
        <Route path="budget" element={<Budget />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
