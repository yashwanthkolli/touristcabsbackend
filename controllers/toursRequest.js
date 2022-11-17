const ToursRequest = require('../models/tourRequest')

exports.register_request = async (req, res) => {
    try{
        const { name, email, phone, from_date, place } = req.body
        const toursRequest = new ToursRequest({ 
            name, 
            place,
            email, 
            phone, 
            from_date
        })
        await toursRequest.save()
        res.send({message: "request sent"})
    }catch(e){
        res.status(500).json(e)
    }
}