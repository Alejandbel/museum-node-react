import React from 'react';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './contexts/AuthContext';
import AppRoutes from './components/navigation/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
    </AuthProvider>
  );
}

export default App;
