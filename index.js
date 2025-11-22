const express = require('express')
const app = express()
app.use(express.json())

// ============================= Mongoose 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Munna-Scriptz:mLuMYoUT1ZbtakeP@cluster0.1xmbxqk.mongodb.net/Munna-Scriptz?appName=Cluster0')
    .then(() => console.log('DB Connected!'));

 const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
 })

 const User = mongoose.model('user' , userSchema)


// ============================== Post Register 
app.post('/register', async (req, res) => {
    const { email, phone, password } = req.body   //Destructure
    const existUser = await User.findOne({ email }) //find existing user

    try {
        // ------- Validation 
        if (!email) return res.status(401).send('Email is required')
        if (!phone) return res.status(401).send('Phone is required')
        if (!password) return res.status(401).send('Password is required')
        if (existUser) return res.status(401).send('Email is already taken')

        // -------- send to database 
        const userData = new User({
            email,
            phone,
            password,
        })

        userData.save()
        
        // -------- Success 
        res.status(201).send({ success: 'Registration Successful', details: userData })

    } catch (err) {
        res.send(err, 'Error happened')
    }

})

// ============================== Post Register 
app.post('/login' , async (req, res)=>{
    const {email , password} = req.body

    try {
        const userFind = await User.findOne({email})
    
        // ------ Validation 
        if(!userFind) return res.status(404).send('User does not exist')
        if(userFind.password != password) return res.status(404).send('Wrong password')
    
        res.status(200).send({success : 'Login successful!', details: req.body})
        
    } catch (error) {
        res.send({error: error})
    }

})



// ------------ Server listen 
app.listen(8000, () => {
    console.log('Server is running')
})