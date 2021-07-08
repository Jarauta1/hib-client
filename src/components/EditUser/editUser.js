import '../../pages/LogIn_signUp/logIn_signUp.css';

import editUser from "./assets/edituser.jpg"

import {useState} from "react"
import {Redirect} from "react-router-dom"

function EditUser (props) {
    console.log(props.location.state.id)
    let [updateName, setUpdateName] = useState("")
    let [updateSurname, setUpdateSurname] = useState("")
    let [updateEmail, setUpdateEmail] = useState("")

  function cambioPantalla () {
    setNum(num+1)
    setMessage("")
    document.querySelector('.container-login').classList.toggle('active');
  }

  function changeUpdateName(e) {
    setUpdateName(e.target.value)
  }

function changeUpdateSurname(e) {
    setUpdateSurname(e.target.value)
  }

function changeUpdateEmail(e) {
    setUpdateEmail(e.target.value)
  }

function updateUser(id,name,surname,email) {
    /* fetch("http://localhost:3001/users/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({token: props.token, type: props.type, id: id, name: name, surname: surname, email: email}),
    }).then((res)=>res.json()).then((server)=>{
        setNum(num+1)
    }) */
    console.log("has editado al tio",this.props.location.state.id)
}

return(<>
    <section className="login-page">
        <div className="user signupBx">
            <div className="formBx">
                <div className="opcion-registro">
                    <h2>CREAR UNA CUENTA</h2>
                    <input onChange={changeUpdateName} className="input-long" type="text" name="name" placeholder="Nombre"/>
                    <input onChange={changeUpdateSurname} className="input-long" type="text" name="surname" placeholder="Primer apellido"/>
                    <input onChange={changeUpdateEmail} className="input-long" type="text" name="email" placeholder="Correo electrónico" />
                    <div className="boton-mensaje">
                        <input onClick={()=>updateUser(id,updateName,updateSurname,updateEmail)} className="input-long" type="submit" name="" value="Update" />
            
                    </div>
                    <p className="signup">
              
                        <a onClick={cambioPantalla}>  UPDATE</a>
                    </p>
                </div>
            </div>
            <div className="imgBx"><img src={editUser} alt="" /></div>
        </div>
    
  </section>
    </>)

}

export default EditUser;