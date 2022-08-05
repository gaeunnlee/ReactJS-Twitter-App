import React, { useState } from "react"
import { Form, Button } from "react-bootstrap";
import { dbService } from "fbase";
import { collection, addDoc, setDoc } from "firebase/firestore";

const Home = () => {
    const [tweet, setTweet] = useState("")
    async function onSubmit (event) {
        event.preventDefault();
        const docRef = await addDoc(collection(dbService, "tweets"), {
          tweet,
          createdAt: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
        setTweet("");
    }
    const onChange = (event) => {
        let tweet = event.target.value;
        setTweet(tweet);
    }
    return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h2>Tweet</h2>
          </Form.Label>
          <Form.Control value={tweet} onChange={onChange} as="input" placeholder="What's happening?" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    )
};
export default Home;