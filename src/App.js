import "./App.css";
import React, { forwardRef } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = React.useState("");

  const [messages, setMessages] = React.useState([]);

  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
      );
    });
  }, []);

  React.useEffect(() => {
    // const name = prompt('Please enter your name');
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://3.bp.blogspot.com/-AAcPm2W7myA/XH02frCd-EI/AAAAAAAAChc/N5ZPSfpuVskqmwRUViKIJWqF51PxriX5gCLcBGAs/w1200-h630-p-k-no-nu/fb-messenger-dark.jpg" />
      <h1>Hello, {username}</h1>

      <form className="app___form">
        <FormControl className="app___formControl">
          <Input
            className="app___input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app___iconButton"
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
