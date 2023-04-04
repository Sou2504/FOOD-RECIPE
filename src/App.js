import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  Home  from './Pages/Home';
import Recipes from './Pages/Recipes';
import SingleRecipe from './Pages/SingleRecipe';
import Default from './Pages/Default';
import { BrowserRouter as Router,   Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
  <Router>
    <main>
      <Navbar />
      <Routes>
        
          <Route path="/" exact element={<Home/>}/>
          <Route path="/recipes" exact element={<Recipes/>} />
          <Route path= "/recipes/:id" element={<SingleRecipe/>} />
          <Route path="*" element={<Default/>} />
        
      </Routes>
    </main>
      
  </Router>
    
  );
}

export default App;
