import './logIn_signUp.css';
import logIn_image from "./assets/logIn_image.jpg"
import signUp_image from "./assets/signUp_image.jpg"

import {useState,useEffect} from "react"
import {Redirect} from "react-router-dom"

function LogIn_signUp (props) {
  
  let [message,setMessage] = useState(props.message)
  let [num,setNum] = useState(0)

  let [emailLogIn, setEmailLogIn] = useState("")
  let [passwordLogIn, setPasswordLogIn] = useState("")

  let [nameSignUp,setNameSignUp] = useState("")
  let [surnameSignUp,setSurnameSignUp] = useState("")
  let [emailSignUp,setEmailSignUp] = useState("")
  let [passwordSignUp,setPasswordSignUp] = useState("")
  let [confirmationSignUp,setConfirmationSignUp] = useState("")

  useEffect(function(){
    setMessage(props.message)
    if (props.page === "signUp") {
        document.querySelector('.container-login').classList.toggle('active');
    }
  },[])

  function changeOption () {
    setNum(num+1)
    setMessage("")
    document.querySelector('.container-login').classList.toggle('active');
  }

  function changeMailLogIn(e) {
    setEmailLogIn(e.target.value)
  }

  function changePasswordLogIn(e) {
    setPasswordLogIn(e.target.value)
    }

  function changeNameSignUp(e) {
    setNameSignUp(e.target.value)
  }

  function changeSurnameSignUp(e) {
    setSurnameSignUp(e.target.value)
  }

  function changeEmailSignUp(e) {
    setEmailSignUp(e.target.value)
  }

  function changePasswordSignUp(e) {
    setPasswordSignUp(e.target.value)
  }

  function changeConfirmationSignUp(e) {
    setConfirmationSignUp(e.target.value)
  }

  if (props.log === true) {
    return(<Redirect to="/"/>)
  } else {
    return(<>
      <section className="login-page">
        <div className="container-login">
          <div className="user signinBx">
            <div className="imgBx"><img src={logIn_image} alt="" /></div>
            <div className="formBx">
              <div className="input-data">
                <h2>Log In</h2>
                <input onChange={changeMailLogIn} className="input-long" type="text" name="" placeholder="Email" />
                <input onChange={changePasswordLogIn} className="input-long" type="password" name="" placeholder="Password" />
                <div className="data-button">
                  <input onClick={()=>props.logIn(emailLogIn,passwordLogIn)} className="input-long" type="submit" name="" value="Access"/>
                  <div id="messageLogIn">
                    {message}
                  </div>
                </div>
                <p className="signup">
                  You don't have an account?
                  <a onClick={changeOption}>Sign Up</a>
                </p>
              </div>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <div className="input-data">
                <h2>CREATE AN ACCOUNT</h2>
                  <input onChange={changeNameSignUp} className="input-long" type="text" name="name" placeholder="Name"/>
                  <input onChange={changeSurnameSignUp} className="input-long" type="text" name="surname" placeholder="Surname"/>
                  <input onChange={changeEmailSignUp} className="input-long" type="text" name="email" placeholder="Email" />
                  <input onChange={changePasswordSignUp} className="input-long" type="password" name="password" placeholder="Password" />
                  <input onChange={changeConfirmationSignUp} className="input-long" type="password" name="confPassword" placeholder="Confirm Password"/>
                  <div className="data-button">
                    <input onClick={()=>props.signUp(nameSignUp,surnameSignUp,emailSignUp,passwordSignUp,confirmationSignUp)} className="input-long" type="submit" name="" value="Sign Up" />
                  <div id="messageSignUp">
                    {message}
                  </div>
                </div>
                <p className="signup">
                  Do you already have an account? 
                  <a onClick={changeOption}>LOG IN</a>
                </p>
              </div>
            </div>
            <div className="imgBx"><img src={signUp_image} alt="" /></div>
          </div>
        </div>
      </section>
    </>)
  }
}

export default LogIn_signUp;