import logo from './logo.svg';
import './App.module.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Nav from './Components/Nav';
import Favorites from './Routes/Favorites';
import { BrowserRouter as Router, Switch, Routes, Route  } from 'react-router-dom';
import Breakfast from './Routes/Breakfast';
import Lunch from './Routes/Lunch';
import { useNavigate } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
       <Route exact path = "/"  element = {<Home />} />
       <Route exact path = '/about' element = {
       <About />
       } />
       <Route exact path = "/favorites" element ={<Favorites
       />} />
       <Route exact path = "/breakfast" element = {<Breakfast 
       />}/>
       <Route exac path = "/lunch" element = {<Lunch />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
