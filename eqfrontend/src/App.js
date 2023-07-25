import './App.css';
import MainNav from './Components/MainNav/MainNav';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <MainNav title="EasyQuizzy" home="Home" about="About" contacts="Contacts" />
      <Registration />
      {/* <About />
      <Login />
      <Registration /> */}
    </div>
  );
}

export default App;
