// ----- register 
const register = (req , res)=>{
    const {username , email, password} = req.body

    res.send(username)


}

// ------ Login 
const login = (req , res)=>{
    res.send('login complete')
}

module.exports = {register, login}