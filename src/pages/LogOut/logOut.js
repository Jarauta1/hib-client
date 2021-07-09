import '../Home/home.css';

import logOut from "../Home/assets/logout.jpg"

import {Link} from "react-router-dom"

function LogOut (props) {
  
  return(<>
    <div className="container-page">
      <div className="row-page">
        <div className="div-page-50 starred">
            <Link onClick={()=>props.logOut()} to="/">
              <h1 className="starred-title">LOGOUT</h1>
              <img className="img-page" src={logOut} alt=""/>
            </Link>
        </div>
      </div>
    </div>
	</>);
}

export default LogOut;