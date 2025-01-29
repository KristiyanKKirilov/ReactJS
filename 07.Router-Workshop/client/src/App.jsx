import { Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/authentication/login/Login";
import Register from "./components/authentication/register/Register";
import GameCatalog from './components/game/game-catalog/GameCatalog';
import GameCreate from './components/game/game-create/GameCreate';
import GameDetails from './components/game/game-details/GameDetails';
import GameEdit from './components/game/game-edit/GameEdit';


function App() {
  return (
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
  );
}

export default App;
