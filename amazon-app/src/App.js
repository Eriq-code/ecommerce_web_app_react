import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'

function App() {
  return (
    <Router> 
      <div className='App'>
    <Header />
    <Routes>
    <Route path='/' element = {<Home /> } />
    <Route path="/Checkout" element={<Checkout />} />    
    </Routes>
    
   
      </div>
   </Router>
    
  );
}

export default App;
