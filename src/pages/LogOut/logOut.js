import '../Home/home.css';

import logOut from "../Home/assets/logout.jpg"


import {Link} from "react-router-dom"


function LogOut (props) {

  
    return(<>
    <div className="container-portada">
      <div className="row-portada">
        <div className="div-portada-50 starred">
            <Link onClick={()=>props.logOut()} to="/"><h1 className="starred-title">LOGOUT</h1>
            <img className="img-portada" src={logOut} alt=""/></Link>
        </div>
      </div>
    </div>
		</>);
  
}

  export default LogOut;