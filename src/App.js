import './App.css';

import { useState } from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom"

import Header from "./components/Header/header"
import Home from './pages/Home/home';
import LogIn_signUp from "./pages/LogIn_signUp/logIn_signUp"
import Users from './pages/Users/users';
import EditUser from './components/EditUser/editUser';
import LogOut from './pages/LogOut/logOut';
import Footer from "./components/Footer/footer"

function App() {

  let [log, setLog] = useState(false)
  let [signIn, setSignIn] = useState(false)
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
      document.getElementById("messageSignUp").innerHTML = "<span>The password must be at least 6 characters long</span>"
    } else if (confirmationSignUp !== passwordSignUp) {
      document.getElementById("messageSignUp").innerHTML = "<span>Password not matching</span>"
    } else {
      setPassword(passwordSignUp)
      fetch("http://localhost:3001/signUp",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nameSignUp: nameSignUp, surnameSignUp: surnameSignUp, emailSignUp: emailSignUp, passwordSignUp: passwordSignUp}),
      }).then((res)=>res.json()).then((server)=>{
        if (server.status === 204) {
          window.alert(`Welcome ${nameSignUp}!, in order to enjoy full access, please Log In.`)
          document.getElementById("messageSignUp").innerHTML = "<span>Registered</span>"
          setSignIn(true) 
        } else if (server.status === 409) {
          document.getElementById("messageSignUp").innerHTML = `<span>${server.data.message}</span>`
          setLog(false)
        } else {
          document.getElementById("messageSignUp").innerHTML = `<span>Internal API error</span>`
          setLog(false)
        }
      })
    }
  }

  const logOut = () => {
    setLog(false)
  }

  return (<BrowserRouter>
    <Header className="header" log={log} signIn={signIn}/>
    <div className="screen">
      <Route exact path="/">
        <Home log={log}/>
      </Route>
      <Route exact path="/logIn">
        <LogIn_signUp logIn={logIn} signUp={signUp} page="logIn" log={log}/>
      </Route>
      <Route exact path="/signUp">
        <LogIn_signUp logIn={logIn} signUp={signUp} page="signUp" log={log} signIn={signIn}/>
      </Route>
      <Route exatc path="/users">
        <Users token={token} type={type} password={password}/>
      </Route>
      <Route exact path="/updateUser" render={(props)=><EditUser {...props}/>}></Route>
      <Route exact path="/logOut">
        <LogOut logOut={logOut}/>
      </Route>
    </div>
    <Footer className="footer"/>
  </BrowserRouter>);
}

export default App;