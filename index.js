const express = require("express");
const app = express();

const sendMessage = (req, res) => {
  res.send("Hello bro");
}
// get post put delete request

// get 

app.get("/", sendMessage);
app.get("/abc", (req, res) => {
  res.send("Hello bro you are in lolo");
});



app.post("/", (req, res) => {
  res.send("post request");
});
app.put("/", (req, res) => {
  res.send("post request");
});



const user = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "age": 25

  },
  {
    "id": 3,
    "name": "John Smith",
    "age": 35
  }
]

app.get("/user/:id/:name", (req, res) => {
  const isLoggdin = true;
  const id = req.params.id;
  console.log(req.params);
  if (isLoggdin) {
    res.send(user)
  } else {
    res.send("you are not logged in");
  }

  res.send("Hello bro you are in lolo");

});



app.use((req, res, next) => {
  res.status(404).send(" 404 Page not found");
})


app.delete("/", (req, res) => {
  res.send("post request");
});




app.listen(3000, () => {
  console.log("Server Start on port 3000");
})
