const express = require('express')
const app = express();

// send HTML response 
app.get('/',(req,res) => {
    res.send("<h1>Welcome to Home page</h1>")
})

app.get('/about',(req,res) => {
    res.status(200).send("<h1>Welcome to About page</h1>")
})

// send multiple lines of HTML
app.get('/contact',(req,res) => {
    res.write("<h1>Welcome to Contact page</h1>")
    res.write("<h2>This is where you contact</h2>")
    res.send();
})

// send JSON data response 
app.get('/temp',(req,res) => {
    res.send([  // instead of send, we can mention json
    {          // passing data as an object and Express would convert into JSON using stringify
        id: 1,
        name: "bapita",
        age: 31
    },
    {          // passing data as array of objects and Express would convert into JSON using stringify
        id: 2,
        name: "roy",
        age: 31
    }

])
})

app.listen(8000, () => {
    console.log("Listening 8000 port..")
});