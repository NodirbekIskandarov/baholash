// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import './styles/navbar.css'
import './styles/header.css'
import './styles/asistance.css'
import './styles/worklist.css'
import './styles/objectives.css'
import './styles/footer.css'
import './styles/map.css'
import './styles/certificates.css'
import Header from './components/header/Header';
import Asistance from './components/asistance/Asistance'
import Worklist from './components/worklist/Worklist';
import Objectives from './components/objectives/Objectives';
import Footer from './components/footer/Footer';
import Map from './components/map/Map';
import Certificates from './components/certificates/Certificates';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Asistance/>
      <Worklist/>
      <Objectives/>
      <Certificates/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
