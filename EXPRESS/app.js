const express = require('express');
const app = express();
const port = 80;
const path = require('path');



// for serving static files
app.use('/static', express.static('static'))



// set the template engine as pug
app.set("view engine","pug");

// set the view directory
app.set("views",path.join(__dirname, "views"));

// our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render("demo",{title:'hey i am vishal',message:'hello world i am vishal i m a billionaire'} );
});

 
app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with vishal ");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});