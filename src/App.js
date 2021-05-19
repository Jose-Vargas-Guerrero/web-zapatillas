import './App.css';
import Navbar from './components/Navbar';
import Seccion1 from './components/Seccion1';
import Seccion2 from './components/Seccion2';
import Banner from './components/Seccion3.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Seccion1/>
      <Seccion2/>
      <Banner/>
    </div>
  );
}

export default App;
