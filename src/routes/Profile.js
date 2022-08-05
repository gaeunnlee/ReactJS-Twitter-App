import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "styles/Profile.module.css";

export default () => {
    let navigate = useNavigate();
    const onLogOutClick = () => {
        const auth = getAuth();
        auth.signOut();
        navigate("/ReactJS-Twitter-App");
    }
    return (<><Button 
                className= {`bi bi-door-open  ${styles.logout}` } 
                onClick={onLogOutClick}
                variant="outline-primary"
                >
                    Log out
                </Button></>)
}
