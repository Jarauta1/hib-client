import userCard from "./userCard.css"
import {useState} from "react"

import {Redirect} from "react-router-dom"

function UserCard(props) {

    let [edit, setEdit] = useState(false)

    function editUser() {
        setEdit(true)
    }

    if (edit === true) {
        return (<Redirect to={{ pathname:"/updateUser", state:{password: props.password, token: props.token, type: props.type, id: props.id, name:props.name,surname:props.surname,email:props.email}}}/>)
    } else {
        return(<>
            <div className="user-card">
                <div className="user-card-pb card__image--fence"></div> 
                <div className="user-card-img"></div>
                <div className="user-card-cont">
                    <div className="user-card-name">{props.name}</div>
                    <p className="user-surname">{props.surname}</p>
                    <p className="user-id">{props.id}</p>
                    <p className="user-card-email">{props.email}</p>
                </div>
                <div className="btn-row">
                    <button onClick={()=>editUser()}>
                        <span className="material-icons edit-btn">edit</span>
                    </button>
                    <button onClick={()=>props.deleteUser(props.id)}>
                        <span className="material-icons edit-btn red">delete</span>
                    </button>
                </div>
            </div>
        </>)
    }
}

export default UserCard;