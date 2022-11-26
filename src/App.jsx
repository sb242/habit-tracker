import firebase from "./Firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState, useEffect } from "react";
import Prompt from "./components/Prompt";
import { Box } from "@mui/material";

function App() {
  const db = firebase.firestore();
  const ref = firebase.firestore().collection("test");

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [journalEntries, setJournalEntries] = useState([]);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  async function createEntry(input, currentDate) {
    const userRef = doc(db, "test", "test-users");
    await updateDoc(userRef, {
      journalEntries: arrayUnion({ date: currentDate, input: input }),
    });
    getDocument();
  }

  async function getDocument() {
    const docRef = doc(db, "test", "test-users");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().journalEntries);
      setJournalEntries(docSnap.data().journalEntries);
      console.log(journalEntries);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData();
    getDocument();
  }, []);

  return (
    <div className="App">
      <h1>Journal Entries</h1>
      <Prompt createEntry={createEntry} />
      {loader === false &&
        journalEntries.map((entry) => (
          <Box sx={{ border: 1 }}>
            <h3>Date: {entry.date} </h3>
            <h3>Entry: {entry.input}</h3>
          </Box>
        ))}
    </div>
  );
}

export default App;
