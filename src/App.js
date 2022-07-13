import './App.css';

//components 
import Home from './components/Home/Home';
import Center from './components/Center/Center';
import Game  from './components/Game1/Game';
import Footer from './components/Footer/Footer'
import Tournament from './components/Tournament/Tournament';
function App() {
  return (
    <div className="App">
      <Home />
      <Center/>
      <Game/>
      <Tournament/>
      <Footer/>
    </div>
  );
}

export default App;
