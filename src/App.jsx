import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';
import LoginForm from './components/LoginForm.jsx';

const AppContent = () => {
  const { user, loading, login, logout } = useContext(AuthContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Bienvenido, {user.username}!</h1>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;

