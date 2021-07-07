import users from "./users.css"
import { useEffect } from "react";

import UserCard from "../../components/UserCard/userCard";

function Users(props) {

    useEffect(function(){
        
        fetch("http://localhost:3001/users", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({token: props.token}),
        }).then((res)=>res.json()).then((server)=>{
          console.log(server.data)
        })
        
      },[])
   
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