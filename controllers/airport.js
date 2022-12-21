const AirportRequest = require('../models/airport')
const fast2sms = require('fast-two-sms')

exports.register_request = async (req, res) => {
    try{
        const { name, email, phone, from_date, pick_place, drop_place } = req.body
        const airportRequest = new AirportRequest({ 
            name, 
            pick_place,
            drop_place,
            email, 
            phone, 
            from_date
        })
        await airportRequest.save()
        var options1 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `AIRPORT BOOKING\nName:${name}\n${phone}\n${email}`,  
            numbers : ['8792451980']
        } 
        fast2sms.sendMessage(options1)
        var options2 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `${name}\nPick: ${pick_place}\nDrop:${drop_place}\nDates:${from_date}`,  
            numbers : ['8792451980']
        }
        fast2sms.sendMessage(options2)
        res.send({message: "request sent"})
    }catch(e){
        res.status(500).json(e)
    }
}