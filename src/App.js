import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// component & pages import
// pages
import Login from './pages/startLogin.js';
import Registration from './pages/startRegistration.js';
import Home from './pages/home.js';
import Search from './pages/search.js';
import Favorites from './pages/favorites.js';
import Answers from './pages/answers.js';
// components
import Header from './components/Header.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/answers" element={<Answers/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
