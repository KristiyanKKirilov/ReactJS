import Home from './components/Home';
import Pricing from './components/Pricing';
import Header from './components/Header';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import Articles from './components/Articles';

function App() {
  return (
    <>
    <div className="bg-white">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
