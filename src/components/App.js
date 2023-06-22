import { useEffect, useState } from 'react';
import '../estilos/App.css';

import Teams from './Teams/Teams';
import axios from 'axios';
import Home from './Home/Home';
import { Route, Routes, useNavigate,} from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import TeamsWest from './Teams/TeamsWest';
import TeamEast from './Teams/TeamEast';
import Contacto from './Contacto/Contacto';
import Register from './Register/Register';
import Login from './Login/Login';
import AuthRoute from './AuthRoute/AuthRoute';
import Profile from './Profile/Profile';
import Detail from './Detail/Detail';
import { API } from '../Services/Api';





function App() {
 const [listaNba, setListaNba] = useState ([]);



 const url = "https://bd-nba.vercel.app/teams";

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


const [user, setUser] = useState(null);
const [loginError, setLoginError] = useState('');
const navigate = useNavigate();

const loginUser = (formData) => {
  API.post("/users/login", formData)
    .then((res) => {
      
      console.log(res);
      if (res.status === 200) {
       
        setUser(res.data.user);
        setLoginError('');
        navigate('/');
      } else {
       
        setLoginError(res.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      setLoginError("Ocurrió un error en el inicio de sesión. Por favor, inténtalo nuevamente.");
    });
};


    return (<div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/teams' element={<AuthRoute user={user} component={<Teams teams={listaNba}/>}/>}/>
      <Route path='/west' element = {<AuthRoute user={user} component={<TeamsWest teamWest = {listaNba}/>}/>}/>
      <Route path='/west/:nombre' element = {<AuthRoute user={user} component={<Detail list={listaNba}/>}/>}/>
      <Route path='/east' element = {<AuthRoute user={user} component={<TeamEast teamEast = {listaNba}/>}/>}/>
      <Route path='/east/:nombre' element = {<Detail list = {listaNba}/>}/>
      <Route path="/contacto" element = {<Contacto value={"valor"}/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError}/>}/>
      <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user}/>}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
     </div>) 
  }
  export default App;
  
  