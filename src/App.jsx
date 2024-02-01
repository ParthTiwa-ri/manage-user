import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { AccountsProvider } from "./Context/AccountsContext";
import DashBoard from "./Pages/DashBoard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AccountsProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="dashboard" element={<DashBoard />} />
          </Routes>
        </AccountsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
