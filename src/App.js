import ROUTES from './config/routes';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserPage from './components/UserPage';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Dashboard />} />
      <Route path={ROUTES.USER} element={<UserPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
