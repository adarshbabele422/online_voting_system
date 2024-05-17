import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import {Switch , Route} from 'react-router-dom' 
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Vote from './components/voting/Vote'
import { createContext, useReducer } from 'react'
import { initialState , reducer} from './components/reducer/UseReducer'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { css } from 'styled-components'
export const UserContext = createContext() ;
const Routing = () =>{
  return(
    <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Login} />  
      <Route exact path="/signout"  />
      <Route exact path="/vote" component={Vote} />
      <Route exact path="/signup" component={Register} />
    </Switch>
  )
}

function App() {
const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;
