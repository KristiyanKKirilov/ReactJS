import { Routes, Route} from 'react-router-dom';
import {AuthContext} from './contexts/AuthContext';

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";
import Login from "./components/authentication/login/Login";
import Register from "./components/authentication/register/Register";
import GameCatalog from './components/game/game-catalog/GameCatalog';
import GameCreate from './components/game/game-create/GameCreate';
import GameDetails from './components/game/game-details/GameDetails';
import GameEdit from './components/game/game-edit/GameEdit';
import { useState } from 'react';
import AuthContextType from './types/AuthContextType';
import AuthState from './types/AuthState';


function App() {
   const [authState, setAuthState] = useState<AuthState | null>(null);

   const changeAuthState = (state: AuthState) => {
      setAuthState(state);
   }

   const contextData: AuthContextType = {
      email: authState?.email || '',
      accessToken: authState?.accessToken || '',
      isAuthenticated: !!authState?.email,
      changeAuthState
   } 

  return (
   <AuthContext.Provider value={contextData}>

     <div id="box">
        <Header/>
        <main id="main-content">
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/games" element={<GameCatalog/>}/>
               <Route path="/games/create" element={<GameCreate/>}/>
               <Route path="/games/:gameId/details" element={<GameDetails/>}/>
               <Route path="/games/:gameId/edit" element={<GameEdit/>}/>
            </Routes>
        </main>
     </div>
   </AuthContext.Provider>
  );
}

export default App;
