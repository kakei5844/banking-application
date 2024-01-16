import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Homepage";
import CreditCardFeature from "./pages/CreditCardFeature";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import WithdrawDeposit from "./pages/WithdrawDeposit";
import RepaymentPage from "./pages/RepaymentPage";
import TransferPage from "./pages/TransferPage";
import ApplicationPage from './pages/ApplicationPage';
import { AuthProvider } from "./misc/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/credit-cards" element={<CreditCardFeature />} />
            <Route path="/withdraw-deposit" element={<WithdrawDeposit />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/repayment" element={<RepaymentPage />} />
            <Route path="/application" element={<ApplicationPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
