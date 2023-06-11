import { useEffect, useState } from 'react';
import '../estilos/App.css';

import Teams from './Teams/Teams';
import axios from 'axios';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Players from './Players/Players';
import NotFound from './NotFound/NotFound';
import TeamsWest from './Teams/TeamsWest';


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
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     </div>) 
  }
  export default App;
  
  