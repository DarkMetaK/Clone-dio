import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContextProvider } from './context/auth';
import MainRoutes from './routes';

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </Router>
  )
}

export default App