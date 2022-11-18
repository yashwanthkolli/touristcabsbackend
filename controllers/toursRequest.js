const ToursRequest = require('../models/tourRequest')
const fast2sms = require('fast-two-sms')

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
        var options1 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `TOURS BOOKING\nName:${name}\n${phone}\n${email}`,  
            numbers : ['8792451980']
        } 
        fast2sms.sendMessage(options1)
        var options2 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `${name}\nPlace: ${place}\nDates:${from_date}`,  
            numbers : ['8792451980']
        }
        fast2sms.sendMessage(options2)
        res.send({message: "request sent"})
    }catch(e){
        res.status(500).json(e)
    }
}