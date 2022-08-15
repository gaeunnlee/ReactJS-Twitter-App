import React, { useEffect, useState } from "react"
import { Form, Button, Card } from "react-bootstrap";
import { dbService } from "fbase";
import { collection, addDoc, setDoc, getDocs, doc, query, orderBy,serverTimestamp  } from "firebase/firestore";
import styles from "styles/Home.module.css";

const Home = () => {
    const [tweet, setTweet] = useState("")
    const [tweets, setTweets] = useState([])
    async function getTweets() {
      const dbTweets = await getDocs(
        query(collection(dbService, "tweets"),orderBy("timestamp", "asc"))
      );
      dbTweets.forEach((doc) => {
        const tweetObject = {
          ...doc.data(),
          id: doc.id,
        }
        setTweets(
          (prev) => [tweetObject, ... prev]
        )
      });
    }
    
    useEffect(() => {
      getTweets()
    },[])
    console.log(tweets)
    async function onSubmit (event) {
        event.preventDefault();
        const docRef = await addDoc(collection(dbService, "tweets"), {
          tweet,
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        setTweet("");
    }
    const onChange = (event) => { 
        let tweet = event.target.value;
        setTweet(tweet);
    }
    return (
      <>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h2>Tweet</h2>
          </Form.Label>
          <Form.Control value={tweet} onChange={onChange} as="input" placeholder="What's happening?" autoComplete="off"/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <Card className={styles.tweet_box}>
        {tweets.map((tweet) => (
          <Card.Body key={tweet.id}>
            <p>{tweet.tweet}</p>
          </Card.Body>
        ))}
      </Card>
      </>

    )
};
export default Home;