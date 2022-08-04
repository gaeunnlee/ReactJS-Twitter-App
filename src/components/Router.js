import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? 
                    (
                    <>
                        <Route path="/ReactJS-Twitter-App" element={<Home />}></Route>
                        <Route path="/ReactJS-Twitter-App/profile" element={<Profile/>}></Route>
                    </>
                    ) :
                    (<Route path="/ReactJS-Twitter-App" element={<Auth />}></Route>)
                }
            </Routes>
        </Router>
    )
}

export default AppRouter;