const userSchema = require("../models/userSchema")
const bcrypt = require('bcrypt');

// ----- register 
const register = async (req, res) => {
    const { username, email, password } = req.body


    try {
        const hashedPass = await bcrypt.hash(password, 10);

        if (!username) return res.send('username is required')
        if (!email) return res.send('email is required')
        if (!password) return res.send('password is required')
        const existUser = await userSchema.findOne({ email })
        if (existUser) return res.send('email is already taken')


        const userDB = new userSchema({
            username,
            email,
            password: hashedPass, 
        })

        userDB.save()

        res.send('registration complete')

    } catch (error) {
        console.log(error)
    }

}

// ------ Login 
const login = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email) return res.send('email is required')
        if (!password) return res.send('password is required')

        const existUser = await userSchema.findOne({ email })
        if (!existUser) return res.send('user not found')

        const match = await bcrypt.compare(password, existUser.password);
        if(!match) return res.send("invalid password")


        res.send('login complete')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { register, login }