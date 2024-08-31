import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/shop';
import { Cart } from './pages/cart/cart';
import { Shopcontextprovider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <Shopcontextprovider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Shopcontextprovider>
    </div>
  );
}

export default App;
