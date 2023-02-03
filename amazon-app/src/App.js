import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router> 
      <div className='App'>
    <Routes>
    <Route path="/Checkout" element={<Header/>} />    
    </Routes>
    <Header />
    <Home />
      </div>
   </Router>
    
  );
}

export default App;
