import ROUTES from './config/routes';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserPage from './components/UserPage';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <section>
      <UserContextProvider>
        <Routes>
          <Route
            path={ROUTES.MAIN}
            element={
              <Dashboard
                url={
                  'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user'
                }
              />
            }
          />
          <Route path={ROUTES.USER} element={<UserPage />} />
          <Route path="*" element={<h1 className="center">Not Found</h1>} />
        </Routes>
      </UserContextProvider>
    </section>
  );
}

export default App;
