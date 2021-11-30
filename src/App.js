import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {Routes, Route} from "react-router-dom"
import NavBar from './component/NavBar';
import Service from './component/Service';
import Search from './component/Search';
import Error from './component/Error';
import Login from './component/Login';


function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <Routes className="rout-div">
     <Route exact  path="/"  element={<Home />}/>
     <Route exact  path="/Search"  element={<Search/>}/>
     <Route exact  path="/service"  element={<Service />}/>
     <Route exact  path="/about"  element={<About />}/>
     <Route  path="contact"  element ={<Contact/>}/>
     <Route exact  path="/login"  element={<Login />}/>
     <Route element={<Error/>}/>
     </Routes>
     </div>
    </>
  );
}

export default App;
