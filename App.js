
import './App.css';
import Main from './Components/main';
import { PageHeader } from 'antd';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Signup from './Components/signup';
import Login from './Components/login';
import Animecard from './Components/AnimeCard';
import Movies from './Components/AnimeID'
function App() {
  return (
    <>
     <BrowserRouter>
      <PageHeader
    className="site-page-header"
    // onBack={() => null}
    title="Anime"
    subTitle=""
    
  />
  
  {/* <Animecard/> */}

    {/* <Main/> */}
    <Link to = {'/Signup'}>Register</Link>
    <Link to = {'/Login'}>Login</Link>
    {/* <Link to = {'/main'}>Login</Link> */}
    <Route exact path = '/main' component = {Main}></Route>
    <Route exact path = '/Signup' component = {Signup}></Route>
    <Route exact path = '/Login' component = {Login}></Route>
    <Route exact path = '/movies/:ID' component = {Movies}></Route>
  </BrowserRouter>
    
   </>
  );
}

export default App;
