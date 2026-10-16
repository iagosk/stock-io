import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LoginView from './views/LoginView.tsx'
import RegisterView from './views/RegisterView.tsx'
import PasswordReset from './views/PasswordResetView.tsx'
import Dashboard from './views/DashboardView.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="login" element={<LoginView />} />
      <Route path="signup" element={<RegisterView />} />
      <Route path="password_reset" element={<PasswordReset />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
)
