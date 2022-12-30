import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Feed from './pages/feed';
import Cadastro from './pages/cadastro';
import NotFound from './pages/NotFound';

import { useAuth } from './hooks/userAuth';

function MainRoutes(){

  const { isLoggedIn } = useAuth();

  return(
    <Routes>
        <Route path='/' element={isLoggedIn ? <Feed /> : <Home />} />
        <Route path='/login' element={isLoggedIn ? <Feed /> : <Login />} />
        <Route path='/feed' element={isLoggedIn ? <Feed /> : <NotFound />} />
        <Route path='/cadastro' element={isLoggedIn ? <Feed /> : <Cadastro />}/>
    </Routes>
  )
}

export default MainRoutes