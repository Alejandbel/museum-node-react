import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import AppRoutes from './components/navigation/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
