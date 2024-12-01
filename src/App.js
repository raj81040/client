// import logo from './logo.svg';
import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {routepath } from "./routes/route";

function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path = {routepath.home} elements ={<Home />} />
        <Route path = {routepath.create} elements = {<CreatePost/>}/>
      </Routes>
    </Router>
  );
}

export default App; 
