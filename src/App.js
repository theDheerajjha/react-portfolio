
import Navbar from './components/Navbar';
import "./style.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './components/home/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
    </div>
  );
}

export default App;
