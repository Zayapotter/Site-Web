import React from 'react';

import './App.css';
import { Home } from './screens/Home';
import { CV } from './screens/CV';
import { Mon_formulaire } from './screens/Mon_formulaire';
import { Routes, Route,NavLink} from 'react-router-dom';


function App() {
  return (
    <div className='contianer mt-10 '>
      <header className='mb-10 flex justify-between items-center'>
        <img className='w-25 h-20' src="image/EMI.png" alt="logo"/>
        <nav className='flex justify-end'>
           <NavLink to='/' className="mr-3" style={({isActive})=>({fontWeight : isActive ? 'bold' : 'normal'})}> Accueil </NavLink>
           <NavLink to ='/CV' className="mr-3" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})} > Mon cv </NavLink>
           <NavLink to='/Mon_formulaire' className="mr-3" style={({isActive}) => ({fontWeight : isActive ? 'bold' : 'normal'})}> Mon Formulaire</NavLink>
        </nav>
      </header >
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/CV' element= {<CV/> } />
        <Route path='/Mon_formulaire' element= {<Mon_formulaire/> } />
      </Routes>
    </div> 
  );
}

export default App;