import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Rastreamento from './pages/Rastreamento';
import Suporte from './pages/Suporte';
import Servicos from './pages/Servicos';
import Precos from './pages/Precos';
import Sustentabilidade from './pages/Sustentabilidade';
import SobreNos from './pages/SobreNos';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/sobre"
        element={
          <Layout>
            <SobreNos />
          </Layout>
        }
      />
      <Route
        path="/sustentabilidade"
        element={
          <Layout>
            <Sustentabilidade />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/cadastro"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/servicos"
        element={
          <Layout>
            <Servicos />
          </Layout>
        }
      />
      <Route
        path="/precos"
        element={
          <Layout>
            <Precos />
          </Layout>
        }
      />
      <Route
        path="/rastreamento"
        element={
          <Layout>
            <Rastreamento />
          </Layout>
        }
      />
      <Route
        path="/suporte"
        element={
          <Layout>
            <Suporte />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
