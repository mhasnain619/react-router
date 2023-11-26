import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route exact path='/' element={<Home />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
