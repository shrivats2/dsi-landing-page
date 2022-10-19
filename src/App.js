import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
