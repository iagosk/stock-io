import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LoginView from './views/LoginView.tsx'
import RegisterView from './views/RegisterView.tsx'
import PasswordResetView from './views/PasswordResetView.tsx'
import Dashboard from './views/DashboardView.tsx'
import EstoqueView from './views/EstoqueView.tsx'
import EquipeView from './views/EquipeView.tsx'
import RelatoriosView from './views/RelatoriosView.tsx'
import Home from './views/Home.tsx'
import CountView from './views/CountView.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="login" element={<LoginView />} />
      <Route path="signup" element={<RegisterView />} />
      <Route path="password_reset" element={<PasswordResetView />} />
      
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="equipe" element={<EquipeView />} />
        <Route path="estoque" element={<EstoqueView />} />
        <Route path="relatorios" element={<RelatoriosView />} />
        <Route path="contagem" element={<CountView />} />
      </Route>
    </Routes>
  </BrowserRouter >,
)
