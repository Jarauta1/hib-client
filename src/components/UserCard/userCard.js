import userCard from "./userCard.css"

function UserCard(props) {

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
                <button onClick={()=>props.updateUser(props.id)}>
                    <span className="material-icons edit-btn">edit</span>
                </button>
                <button onClick={()=>props.deleteUser(props.id)}>
                    <span className="material-icons edit-btn red">delete</span>
                </button></div>
            </div> 
    </>)
}

export default UserCard;