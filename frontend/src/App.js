import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Hero from './component/Hero';
import Meetthe from './component/Meetthe';
import Footer  from './component/Footer';
function App() {
  return (
    <div className="App">
      <Home />
      <Hero />
      <Meetthe />
      <Footer />
    </div>
  );
}

export default App;
