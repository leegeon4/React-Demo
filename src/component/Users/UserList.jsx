import {useContext, useEffect, useState} from "react";
import PageSpinner from "../UI/PageSpinner.jsx";
import userContext from "./UserContext.js";
import useFetch from "../utils/useFetch.js";

function UserList(){
    const {user, setUser} = useContext(userContext)
//"http://localhost:3001/users"

    const {data:users =[],status,error} = useFetch(
        "http://localhost:3001/users"
    )

    useEffect(() => {
        setUser(users[0])
    }, [users,setUser]);

    if(status === "error"){
        return <div>오류 : {error}</div>
    }

    if(status === "loading") {
        return (
            <PageSpinner/>
        )
    }

    // 순서 6) users, user 상태값을 가지고 UI를 만듭니다.
    return(
        <>
        {users && ( <ul className="users items-list-nav">
                {users.map((u)=>(
                    <li key={u.id}
                        className={u.id === user?.id ? "selected":null}>
                        <button className="btn btn-header"
                                onClick={()=>setUser(u)}>
                            {u.name}
                        </button>
                    </li>
                ))}
            </ul>)}
          {/*  {user && (<div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>)}*/}
        </>
    )
}
export default UserList
