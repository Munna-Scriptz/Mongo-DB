const express = require("express");
const app = express();
app.use(express.json());

// =================== Mongoose 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Munna-Scriptz:mLuMYoUT1ZbtakeP@cluster0.1xmbxqk.mongodb.net/Munna-Scriptz?appName=Cluster0')
  .then(() => console.log('DB Connected!'));

  const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone: String,
  })

  const User = mongoose.model('user', userSchema) //Schema Model 


// --------------------- Get data only
app.get("/", (req, res) => {
    res.send("Hello world");
});

// --------------------- Post data Registration
app.post("/register", (req, res) => {
    // ------------- Destructure
    const { email, password, phone } = req.body;

    try {
        // ----------------- Validation
        if (!email) return res.status(401).send("Enter your email");
        if (!password) return res.status(401).send("Enter password");
        if (!phone) return res.status(401).send("Enter your number");

        // ----------------- Send to DB




    } catch (error) {
        console.log(error, "error");
    }

    res.send("Register success");
});

// --------------------- Post data Login
app.post("/login", (req, res) => {
    // ------------- Destructure
    const { email, password } = req.body;

    try {
        // ----------------- Validation
        if (!email) return res.status(401).send("Enter your email");
        if (!password) return res.status(401).send("Enter password");



    } catch (error) {
        console.log('Error', error)
    }




    // ---------------- Complete 
    res.send("Login Complete");
});

app.listen(8000, () => {
    console.log("Server is running");
});
