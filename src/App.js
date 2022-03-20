import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import React, { Fragment, Suspense } from 'react';
import Layout from './components/Layout/Layout';
// import UserProfile from './components/Profile/UserProfile';
// import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
// import UsersPage from './pages/UsersPage';
// import LoginPage from './pages/LoginPage'
// import NotFound from './components/NotFound/NotFound'
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import Footer from './components/Layout/footer';
import LoadingSpinner from './shared/LoadingSpinner';

function App() {
  const { token, login, logout, userId } = useAuth();

  const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
  const UserProfile = React.lazy(() => import('./components/Profile/UserProfile'));
  const AuthPage = React.lazy(() => import('./pages/AuthPage'));
  const LoginPage = React.lazy(() => import('./pages/LoginPage'))
  const UsersPage = React.lazy(() => import('./pages/UsersPage'))

  let routes;
  if (token) {
    routes = (
      <Layout>
        <Routes>
          <Route exact path="*" element={<NotFound />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Users" element={<UsersPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Layout>

    );
  } else {
    routes = (
      <Layout>
        <Routes>
          <Route exact path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Users" element={<UsersPage />} />
        </Routes>
        <Footer />
      </Layout>
    );
  }


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}>
      <BrowserRouter>
        <Fragment>
          <Suspense fallback={<div><LoadingSpinner /></div>}>
            {routes}
          </Suspense>
        </Fragment>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
