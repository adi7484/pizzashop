import "./App.css";

import TopBar from './components/TopBar'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBars from "./components/NavBars";
import HomeScreen from "./screens/HomeScreen";


import ProductList from "./components/Cart";


function App() {
  return (
    <>
    <BrowserRouter>
      <TopBar></TopBar>
      <NavBars/>
      <Switch>
        <Route path="/about" component={About} exact/> 
        <Route path="/contact" component={Contact} exact/> 
        <Route path="/policy" component={Policy} exact/>
        <Route path="/cart" component={ProductList} exact/>
        <Route path="/" component={HomeScreen} exact/> 
         
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
