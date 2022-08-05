import { getAuth } from "firebase/auth"
import React from "react"
import { useNavigate } from "react-router-dom";

export default () => {
    let navigate = useNavigate();
    const onLogOutClick = () => {
        const auth = getAuth();
        auth.signOut();
        navigate("/ReactJS-Twitter-App");
    }
    return (<><button onClick={onLogOutClick}>Log out</button></>)
}
