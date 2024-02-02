import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { AccountsProvider } from "./Context/AccountsContext";
import UserPanel from "./Pages/UserPanel";
import Dashboard from "./Component/UserDetail/DashBoard/Dashboard";
import UpdateDetail from "./Component/UserDetail/UpdateDetail/UpdateDetail";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        {/* Wrap the entire application with AuthProvider */}
        <AccountsProvider>
          {/* Wrap the entire application with AccountsProvider */}
          <BrowserRouter>
            {/* Router component for handling navigation */}
            <Routes>
              {/* Define routes */}
              <Route index element={<HomePage />} />{" "}
              {/* Default route to HomePage */}
              <Route path="login" element={<Login />} />{" "}
              {/* Route to Login component */}
              <Route path="SignUp" element={<SignUp />} />{" "}
              {/* Route to SignUp component */}
              <Route path="userpanel" element={<UserPanel />}>
                {/* Nested route for UserPanel */}
                <Route index element={<Navigate to="dashboard" />} />{" "}
                {/* Default route within UserPanel to navigate to dashboard */}
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      {/* Protected route to Dashboard */}
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="updateDetails"
                  element={
                    <ProtectedRoute>
                      {/* Protected route to UpdateDetail */}
                      <UpdateDetail />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
              {/* Route for handling unknown paths */}
            </Routes>
          </BrowserRouter>
        </AccountsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
