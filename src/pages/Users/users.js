import users from "./users.css"

import UserCard from "../../components/UserCard/userCard";

function Users(props) {



    return(<div className="users-back">
        <ul className="cards">
            <li className="user-card-item">
                <UserCard />
            </li>
            <li className="user-card-item">
                <UserCard />
            </li> <li className="user-card-item">
                <UserCard />
            </li> <li className="user-card-item">
                <UserCard />
            </li> <li className="user-card-item">
                <UserCard />
            </li>
        </ul>  
    </div>)
}

export default Users;