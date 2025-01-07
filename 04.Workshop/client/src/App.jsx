import './styles.css'
import './App.css';
import Footer from './components/core/footer/Footer'
import Header from './components/core/header/Header'
import Section from './components/user-section/UserSection'

function App() {

  return (
    <>
        <Header/>   
        <main className="main">
          <Section/>
        </main>   
        <Footer/>
    </>
  )
}

export default App
