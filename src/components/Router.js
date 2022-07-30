import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? 
                    (<Route path="/ReactJS-Twitter-App" element={<Home />}></Route>) :
                    (<Route path="/ReactJS-Twitter-App" element={<Auth />}></Route>)
                }
            </Routes>
        </Router>
    )
}

export default AppRouter;