import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './helpers/constants/ROUTES.js';
import PublicRoutes from './routes/PublicRoutes.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Layout from './components/Layout/Layout.jsx';
import 'modern-normalize';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const FriendsPage = lazy(() => import('./pages/FriendsPage/FriendsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
          <Route path={ROUTES.FRIENDS} element={<FriendsPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route
            path={ROUTES.REGISTER}
            element={
              <PublicRoutes>
                <AuthPage />
              </PublicRoutes>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoutes>
                <AuthPage />
              </PublicRoutes>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <PrivateRoutes>
                <ProfilePage />
              </PrivateRoutes>
            }
          />
          <Route
            path={ROUTES.ADD_PET}
            element={
              <PrivateRoutes>
                <AddPetPage />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
