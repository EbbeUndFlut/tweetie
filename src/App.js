// SCSS styles
import './App.scss';

// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages & components import 
// pages
import Login from './pages/startLogin.js';
import Registration from './pages/startRegistration.js';
import Home from './pages/home.js';
import Search from './pages/searchPage.js';
import Favorites from './pages/favorites.js';
import Answers from './pages/answers.js';
// components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Logo from './components/Logo.js';

// Routing
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Logo/><Login/></>}/>
          <Route path="/registration" element={<><Logo/><Registration/></>}/>
          <Route path="/home" element={<><Header/><Home/><Footer/></>}/>
          <Route path="/search" element={<><Header/><Search/><Footer/></>}/>
          <Route path="/favorites" element={<><Header/><Favorites/><Footer/></>}/>
          <Route path="/answers" element={<><Header/><Answers/><Footer/></>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
