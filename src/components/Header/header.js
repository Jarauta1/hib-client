import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./assets/logo_header.png"

function Header(props) {

    let [usuario, setUsuario] = useState("")
    let [datos,setDatos] = useState([])
    let [cesta,setCesta] = useState(0)

    useEffect(function(){
  
        if (usuario !== "") {
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario}),
            }).then((res)=>res.json()).then((res)=>{
                setDatos(res.datos[0].cesta)
                setCesta(datos.length)
            })
          }
      },[usuario])


    if (usuario != "") {
        return(<>
            <section className="header-section">
                <div>
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="djshop"/>
                    </Link>
                </div>
                <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
                <label className="menu-header-icon" htmlFor="menu-header-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu-header">
                    <li>
                        <Link className="header-libros" to="/users"><a>Users</a></Link>
                    </li>
                    <li>
                        <Link className="header-peliculas" to="/logout"><a>Logout</a></Link>
                    </li>
                    {/* <li>
                       <Link className="header-user" to="/usuario"><a>{props.nombre}</a><a className="material-icons">manage_accounts</a></Link>
                    </li>
                    <li onClick={()=>props.salir()} className="material-icons">
                        <Link to="/"><a>exit_to_app</a></Link>
                    </li> */}
                </ul>
            </section>
        </>)
    } else {
        return (<>
            <section className="header-section">
                <div>
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="hiberus"/>
                    </Link>
                </div>
                <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
                <label className="menu-header-icon" htmlFor="menu-header-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu-header">
                <li>
                        <Link className="header-camisetas" to={{pathname: "/logIn"}}><a>Login</a></Link>
                    </li>
                    <li>
                        <Link className="header-comics" to={{pathname: "signUp"}}><a>Sign Up</a></Link>
                    </li>       
                </ul>
            </section>
        </>);
    }
    
}

export default Header;