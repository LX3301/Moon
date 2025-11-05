import './index.css';
import './assets/styles/fonts.css'
 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Career from './pages/career/Career'
import Contacts from './pages/contacts/Contacts'
import NotFound from './pages/notFound/NotFound'

function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
