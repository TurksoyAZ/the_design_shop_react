
import './App.scss';

// Verbingunden mit den Komponenten
import Navbar from './Components/Navbar/Navbar.jsx';
import MainList from './Components/Main/MainList.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">

      <Navbar />
      <MainList />
      <Footer />

    </div>
  );
}

export default App;
