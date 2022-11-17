const Request = require('../models/request')

exports.register_request = async (req, res) => {
    try{
        const { name, email, car, phone, from_date, to_date } = req.body
        const request = new Request({ 
            name, 
            email, 
            car, 
            phone, 
            from_date, 
            to_date 
        })
        await request.save()
        res.send({message: "request sent"})
    }catch(e){
        res.status(500).json(e)
    }
}