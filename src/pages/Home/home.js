import './home.css';

import logIn from "./assets/login.jpg"
import signUp from "./assets/signup.jpg"
import users from "./assets/users.jpg"
import logOut from "./assets/logout.jpg"


import {Link} from "react-router-dom"


function Home (props) {
console.log(props)
  if (props.log === true) {
    return(<>
    <div className="container-portada">
      
      <div className="row-portada">
      <div className="div-portada-50 starred">
      <Link to="/users"><h1 className="starred-title">USERS</h1>
            <img className="img-portada" src={users} alt=""/></Link>
        </div>
        <div className="div-portada-50 starred">
      <Link to="/logOut"><h1 className="starred-title">LOGOUT</h1>
            <img className="img-portada" src={logOut} alt=""/></Link>
        </div>
      </div>
    </div>
		</>);
  } else if (props.log === false) {
    return(<>
    <div className="container-portada">
      
      <div className="row-portada">
      <div className="div-portada-50 starred">
      <Link to="/logIn"><h1 className="starred-title">LOGIN</h1>
            <img className="img-portada" src={logIn} alt=""/></Link>
        </div>
        <div className="div-portada-50 starred">
      <Link to="/signUp"><h1 className="starred-title">SIGN UP</h1>
            <img className="img-portada" src={signUp} alt=""/></Link>
        </div>
      </div>
    </div>
		</>);
  }
}

  export default Home;