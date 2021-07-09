import '../../pages/LogIn_signUp/logIn_signUp.css';

import editUser from "./assets/edituser.jpg"

import {useState} from "react"
import {Redirect} from "react-router-dom"

function EditUser (props) {
    
    let [updateName, setUpdateName] = useState("")
    let [updateSurname, setUpdateSurname] = useState("")
    let [updateEmail, setUpdateEmail] = useState("")

    let [edit, setEdit] = useState(false)


    function changeUpdateName(e) {
        setUpdateName(e.target.value)
    }

    function changeUpdateSurname(e) {
        setUpdateSurname(e.target.value)
    }

    function changeUpdateEmail(e) {
        setUpdateEmail(e.target.value)
    }

    function updateUser(id,name,surname,email,password,token,type) {
        fetch("http://localhost:3001/users/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password, 
                token: token, 
                type: type,
                id: id, 
                name: name, 
                surname: surname, 
                email: email}),
        }).then((res)=>res.json()).then((server)=>{
        setEdit(true)
        })
    
    }

    if (edit === true) {
        return (<Redirect to="/users"/>)
    } else {
        return(<>
            <section className="login-page">
                <div className="container-login">
                    <div className="user signinBx">
                        <div className="formBx">
                            <div className="input-data">
                                <h2>UPDATE USER</h2>
                                <input onChange={changeUpdateName} className="input-long" type="text" name="name" placeholder={props.location.state.name} required/>
                                <input onChange={changeUpdateSurname} className="input-long" type="text" name="surname" placeholder={props.location.state.surname} required/>
                                <input onChange={changeUpdateEmail} className="input-long" type="text" name="email" placeholder={props.location.state.email} required/>
                                <div className="data-button">
                                    <input onClick={()=>updateUser(props.location.state.id,updateName,updateSurname,updateEmail,props.location.state.password,props.location.state.token,props.location.state.type)} className="input-long" type="submit" name="" value="Update" />
                                </div>
                            </div>
                        </div>
                        <div className="imgBx"><img src={editUser} alt="" /></div>
                    </div>
                </div>
            </section>
        </>)
    }
}

export default EditUser;