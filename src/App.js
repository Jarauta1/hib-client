import './App.css';

import { useState } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./components/Header/header"
import LogIn_signUp from "./pages/LogIn_signUp/logIn_signUp"
import Users from './pages/Users/users';
import Footer from "./components/Footer/footer"

function App() {

  let [log, setLog] = useState(false)

  const logIn = (emailLogIn, passwordLogIn) => {
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
        setLog(true)
      }
      /* 
      
        localStorage.setItem("mail",res.usuario)
      }      */
    })
  }

  const signUp = (nameSignUp,surnameSignUp,emailSignUp,passwordSignUp,confirmationSignUp) => {
         
     if (passwordSignUp.length < 6) {
       document.getElementById("messageSignUp").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
      } else if (confirmationSignUp !== passwordSignUp) {
        document.getElementById("messageSignUp").innerHTML = "<span>La contraseña no coincide</span>"
      } else {
        fetch("http://localhost:3001/signUp",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({nameSignUp: nameSignUp, surnameSignUp: surnameSignUp, emailSignUp: emailSignUp, passwordSignUp: passwordSignUp}),
        }).then((res)=>res.json()).then((server)=>{
          console.log(server.data.statusCode)
          if (server.data.statusCode === 409) {
            document.getElementById("messageSignUp").innerHTML = `<span>${server.data.message}</span>`
          } else if (server.data.statusCode === 204) {
            setLog(true)
            console.log("entra")
          }
         
         /*  
             localStorage.setItem("mail",res.usuario)
           }  */    
        })
      }
  }
  
  return (<BrowserRouter>
    <Header /* salir={} *//>
    <Route exact path="/">

    </Route>
    <Route exact path="/logIn">
      <LogIn_signUp logIn={logIn} signUp={signUp} page="logIn" log={log}/>
    </Route>
    <Route exact path="/signUp">
      <LogIn_signUp logIn={logIn} signUp={signUp} page="signUp" log={log}/>
    </Route>
    <Route exatc path="/users">
      <Users />
    </Route>
    <Footer/>
  </BrowserRouter>);
}

export default App;