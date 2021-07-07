import users from "./users.css"
import { useState, useEffect } from "react";

import UserCard from "../../components/UserCard/userCard";

function Users(props) {

    let [users, setUsers] = useState([])
    let [num, setNum] = useState(0)
    
    useEffect(function(){
        
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({token: props.token, type: props.type}),
        }).then((res)=>res.json()).then((server)=>{
          setUsers(server.data.items)
        })
        
    },[num])
        
    function deleteUser(id) {
        fetch("http://localhost:3001/users/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: props.token, type: props.type, id: id}),
        }).then((res)=>res.json()).then((server)=>{
            setNum(num+1)
        })
    }

    function uptdateUser(id) {
        fetch("http://localhost:3001/users/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: props.token, type: props.type, id: id}),
        }).then((res)=>res.json()).then((server)=>{
            setNum(num+1)
        })
    }
   



    let showUsers = users.map(user=>{
        return(
            <li className="user-card-item">
                <UserCard uptdateUser={uptdateUser} deleteUser={deleteUser} name={user.name} surname={user.surname} id={user.id} email={user.email}/>
            </li>)
    })
   
    return(<div className="users-back">
        <ul className="cards">
            {showUsers}
        </ul>  
    </div>)
}

export default Users;