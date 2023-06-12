import { useEffect, useState } from 'react';
import '../estilos/App.css';

import Teams from './Teams/Teams';
import axios from 'axios';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Players from './Players/Players';
import NotFound from './NotFound/NotFound';
import TeamsWest from './Teams/TeamsWest';
import TeamEast from './Teams/TeamEast';
import Contacto from './Contacto/Contacto';


function App() {
 const [listaNba, setListaNba] = useState ([]);
 const url = "http://localhost:3001/teams";

 useEffect(() => {
  
  axios.get(url).then(
    (resp) => {
      setListaNba(resp.data);
      
    },
    (error) => {
      console.log(error);
    }
  );
}, []);


    return (<div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/teams' element={<Teams teams = {listaNba}/>}/>
      <Route path='/players' element= {<Players/>}/>
      <Route path='/west' element = {<TeamsWest teamWest = {listaNba}/>}/>
      <Route path='/east' element = {<TeamEast teamEast = {listaNba}/>}/>
      <Route path="/contacto" element = {<Contacto value={"valor"}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     </div>) 
  }
  export default App;
  
  