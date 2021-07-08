import './App.css';

import { useState } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./components/Header/header"
import Home from './pages/Home/home';
import LogIn_signUp from "./pages/LogIn_signUp/logIn_signUp"
import Users from './pages/Users/users';
import EditUser from './components/EditUser/editUser';
import LogOut from './pages/LogOut/logOut';
import Footer from "./components/Footer/footer"

function App() {

  let [log, setLog] = useState(false)
  let [token, setToken] = useState("")
  let [type, setType] = useState("")
  let [password, setPassword] = useState("")

  const logIn = (emailLogIn, passwordLogIn) => {
    setPassword(passwordLogIn)
    fetch("http://localhost:3001/logIn", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({emailLogIn: emailLogIn, passwordLogIn: passwordLogIn}),
    }).then((res)=>res.json()).then((server)=>{
      if (server.data.statusCode !== undefined) {
        document.getElementById("messageLogIn").innerHTML = `<span>${server.data.message}</span>`
      } else {
        document.getElementById("messageLogIn").innerHTML = `<span>Logueado</span>`
        setToken(server.data.accessToken)
        setType(server.data.tokenType)
        setLog(true)
      }
  })
  }

  const signUp = (nameSignUp,surnameSignUp,emailSignUp,passwordSignUp,confirmationSignUp) => {
         
     if (passwordSignUp.length < 6) {
       document.getElementById("messageSignUp").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
      } else if (confirmationSignUp !== passwordSignUp) {
        document.getElementById("messageSignUp").innerHTML = "<span>La contraseña no coincide</span>"
      } else {
        setPassword(passwordSignUp)
        fetch("http://localhost:3001/signUp",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({nameSignUp: nameSignUp, surnameSignUp: surnameSignUp, emailSignUp: emailSignUp, passwordSignUp: passwordSignUp}),
        }).then((res)=>res.json()).then((server)=>{
          document.getElementById("messageSignUp").innerHTML = "<span>Signeado</span>"
          setLog(true) 
        })
      }
  }

  const logOut = () => {
    setLog(false)
  }

  return (<BrowserRouter>
    <Header log={log}/>
    <Route exact path="/">
      <Home log={log}/>
    </Route>
    <Route exact path="/logIn">
      <LogIn_signUp logIn={logIn} signUp={signUp} page="logIn" log={log}/>
    </Route>
    <Route exact path="/signUp">
      <LogIn_signUp logIn={logIn} signUp={signUp} page="signUp" log={log}/>
    </Route>
    <Route exatc path="/users">
      <Users token={token} type={type} password={password}/>
    </Route>
    <Route exact path="/updateUser" render={(props)=><EditUser {...props}/>}></Route>
    <Route exact path="/logOut">
      <LogOut logOut={logOut}/>
    </Route>
    <Footer/>
  </BrowserRouter>);
}

export default App;