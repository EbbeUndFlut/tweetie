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
import GetId from './components/GetId.js';
import GuardedRoute from './components/GuardedRoute.js';
import ConversationPage from './pages/ConversationPage.js'

// Routing
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Logo /><Login /></>} />
          <Route exact path="/registration" element={<><Logo /><Registration /></>} />
          <Route element={<GuardedRoute />}>
            <Route path="/home" element={<><Header title="Home" /><Home /><Footer /></>} />
            <Route path="/search" element={<><Header title="Suche" /><Search /><Footer /></>} />
            <Route path="/favorites" element={<><Header title="Favoriten" /><Favorites /><Footer /></>} />
            <Route path="/conversationpage/:id" element={<><Header title="Les dich da mal durch." /><ConversationPage/><Footer /></>} />
            <Route path="/answers" element={<><Header title="Antworten" /><Answers /><Footer /></>} />
            <Route path="/answers/:id" element={<><Header title="Antworten" /><GetId /><Footer /></>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
