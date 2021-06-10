const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
//console.log(staticPath)

// to set the view engine 
app.set('view engine', "hbs"); // if pug/ EJS had been there then mention pug / EJS instead of hbs

// We can rename views folder 
app.set('views',templatePath);

// Register Partials path
hbs.registerPartials(partialsPath);

// to serve a website using  built-in middleware express.static
app.use(express.static(staticPath));

// template engine route
app.get("/", (req,res) => {
    res.render('index', {
        channelName : "Welcome Bapita" // dynamic content to index.hbs
    });
})

app.get("/about", (req,res) => {
    res.render('about', {
        channelName : "Welcome Roy" // dynamic content to about.hbs
    });
})

// Adding 404 custom error pages 

app.get("/about/*", (req,res)=> {
    res.render("404", {
        errorcomment: "This Page of About us does not exist!"
    })
})

app.get("*", (req,res) => {
    res.render("404", {
        errorcomment: "OOPS! Page couldn't be Found"
    });
})



app.listen(8000, () => {
    console.log("listening 8000 port ..")
})