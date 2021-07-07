import userCard from "./userCard.css"
import {useState} from "react"

function UserCard(props) {

    var body = document.getElementsByTagName('body')[0];

    function toggleForm() {
        body.classList.toggle('form-active');
    }

    let [updateName, setUpdateName] = useState("")
    let [updateSurname, setUpdateSurname] = useState("")
    let [updateEmail, setUpdateEmail] = useState("")

    function changeUpdateName(e) {
        setUpdateName(e.target.value)
      }

    function changeUpdateSurname(e) {
        setUpdateSurname(e.target.value)
      }

    function changeUpdateEmail(e) {
        setUpdateEmail(e.target.value)
      }

    return(<>
        <div className="user-card">
            <div className="user-card-pb card__image--fence">
            </div>
            <div className="user-card-img">
            </div>
            <div className="user-card-cont">
                <div className="user-card-name">{props.name}</div>
                <p className="user-surname">{props.surname}</p>
                <p className="user-id">{props.id}</p>
                <p className="user-card-email">{props.email}</p>
            </div>
            <div className="btn-row">
                <button onClick={toggleForm}>
                    <span className="material-icons edit-btn">edit</span>
                </button>
                <button onClick={()=>props.deleteUser(props.id)}>
                    <span className="material-icons edit-btn red">delete</span>
                </button>
            </div>
        </div> 
            <form>
	            <input onChange={changeUpdateName} type="text" name="name" placeHolder={props.name}/>
	            <input onChange={changeUpdateSurname} type="text" name="surname" placeHolder={props.surname}/>
	            <input onChange={changeUpdateEmail} type="text" name="email" placeHolder={props.email}/>
	            <button className="pay" onClick={()=>props.updateeUser(props.id,updateName,updateSurname,setUpdateEmail)}>Uptdate</button>
            </form>
    </>)
}

export default UserCard;