const express = require('express')
const app = express()
app.use(express.json())
// ============================= Mongoose 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Munna-Scriptz:mLuMYoUT1ZbtakeP@cluster0.1xmbxqk.mongodb.net/Munna-Scriptz?appName=Cluster0')
    .then(() => console.log('DB Connected!'));

 const userSchema = new mongoose.Schema({
    email: String,
    phone: String,
    password: String,
 })

 const User = mongoose.model('user' , userSchema)

// ----------------------- Post Register 
app.post('/register', (req, res) => {
    const { email, phone, password } = req.body   //Destructure

    try {
        // ------- Validation 
        if (!email) return res.status(400).send('Email is required')
        if (!phone) return res.status(400).send('Phone is required')
        if (!password) return res.status(400).send('Password is required')

        // -------- send to database 
        const userData = new User({
            email,
            phone,
            password,
        })

        userData.save()
        res.send(userData)


    } catch (err) {
        console.log(err, 'Error happened')
    }

    // -------- Success 
    res.status(201).send({ success: 'Registration Successful', details: req.body })
})

// ----------------------- Post Register 
app.post('/login' , async (req, res)=>{
    const {email , password} = req.body

    const userFind = await User.findOne({email})

    // ------ Validation 
    if(!userFind) return res.status(404).send('User does not exist')
    if(userFind.password != password) return res.status(404).send('Wrong password')

    res.status(200).send({success : 'Login successful!', details: req.body})
})



// ------------ Server listen 
app.listen(8000, () => {
    console.log('Server is running')
})



//phone number 01308914951