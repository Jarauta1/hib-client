import userCard from "./userCard.css"

function UserCard() {
    return(<>
        <div className="user-card">
            <div className="user-card-pb card__image--fence">

            </div>
            <div className="user-card-img">

            </div>
            <div className="user-card-cont">
                <div className="user-card-name">Diego</div>
                <p className="user-surname">Jarauta</p>
                <p className="user-id">#2</p>
                <p className="user-card-email">mustertest@gmail.com</p>
            </div>
            <div className="btn-row">
                <button>
                    <i className="fas fa-edit edit-btn"></i>
                </button>
                <button>
                    <i className="fas fa-trash-alt edit-btn red"></i>
                </button></div>
            </div> 
    </>)
}

export default UserCard;