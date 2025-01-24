import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Header from "./components/Header";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import NotFound from "./components/NotFound";
import Mission from './components/Mission';
import ContactUs from './components/ContactUs';
import OurTeam from "./components/OurTeam";


function App() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<OurTeam />} />
          </Route>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
