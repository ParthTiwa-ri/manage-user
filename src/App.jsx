import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { AccountsProvider } from "./Context/AccountsContext";
import UserPanel from "./Pages/UserPanel";
import Dashboard from "./Component/Dashboard/DashBoard/Dashboard";
import UpdateDetail from "./Component/Dashboard/UpdateDetail/UpdateDetail";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <div>
      <AuthProvider>
        <AccountsProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="userpanel" element={<UserPanel />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="updateDetails"
                  element={
                    <ProtectedRoute>
                      <UpdateDetail />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AccountsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
