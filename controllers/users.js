const User = require('../models/users')

exports.register_user = async (req, res) => {
    try{
        const { username, password } = req.body
        const user = new User({
            username, password
        })
        await user.save()
        res.send({message: "user registered"})
    }
    catch(e){
        res.status(500).json(e)
    }
}