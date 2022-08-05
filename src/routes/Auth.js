import { 
    getAuth, 
    createUserWithEmailAndPassword,signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Alert } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { authService, firebaseInstance } from "fbase";


const Auth = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            let data;
            if (newAccount) {
                data = await createUserWithEmailAndPassword(auth, email, password)
            } else {
                data = await signInWithEmailAndPassword(auth, email, password)
            }
            //console.log(data)
        } 
        
        catch (error) {
            setError(error.message);
        }
    }

    const clickCreateAccount = () => setNewAccount (true);
    const clickSignIn = () => setNewAccount (false);

    const onSocialClick = async (event) => {
        const auth = getAuth();
        const {
            target: { name },
        } = event;
        if (name === "google") {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
            });
        } else if (name === "github") {
           
        }
        //const data = await auth.signInWithPopup(provider);
        //console.log(data);
    }

    return (
        <div id="loginPage">
            <div id="loginForm">
                <Nav
                 variant="pills"
                 defaultActiveKey="1"
                 className="justify-content-center loginTab" 
                >
                <Nav.Item>
                    <Nav.Link onClick={clickCreateAccount} eventKey="1">Create Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={clickSignIn} eventKey="2">Sign in</Nav.Link>
                </Nav.Item>
                </Nav>
                <h1>
                {newAccount ? "Create Account" : "Sign in"}
                </h1>
                <Form onSubmit={onSubmit}>
                    <div className="text-center mb-3">
                        <p>{newAccount ? "Create Account with:" : "Sign in with:"}</p>
                        <Button onClick={onSocialClick} name="facebook" className="btn-link btn-floating mx-1">
                            <i className="bi-facebook"></i>
                        </Button>

                        <Button onClick={onSocialClick} name="google" className="btn-link btn-floating mx-1">
                            <i className="bi-google" name="google" onClick={onSocialClick} ></i>
                        </Button>

                        <Button onClick={onSocialClick} name="twitter" className="btn-link btn-floating mx-1">
                            <i className="bi-twitter"></i>
                        </Button>

                        <Button onClick={onSocialClick} name="github" className="btn-link btn-floating mx-1">
                            <i className="bi-github"></i>
                        </Button>
                    </div>

                    <p className="text-center">or:</p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                name="email" 
                                required 
                                value={email} 
                                onChange={onChange}
                                autoComplete="off"
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                name="password" 
                                required 
                                value={password} 
                                onChange={onChange}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {(error).length === 0 
                        ? null 
                        : 
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    }

                    <Button 
                        variant="primary" 
                        type="submit"
                        className="btn btn-primary btn-block mb-3"
                    >
                        {newAccount ? "Create Account" : "Sign In"}                  
                    </Button>
                </Form>
            </div>

        </div>       
    )
}
;
export default Auth;