const Request = require('../models/request')
const fast2sms = require('fast-two-sms')

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
        var options1 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `CAR BOOKING\nName:${name}\n${phone}\n${email}`,  
            numbers : ['8310484467']
        } 
        fast2sms.sendMessage(options1)
        var options2 = {
            authorization : process.env.API_KEY , 
            route: 'p',
            message : `${name}\nCar: ${car}\nDates:${from_date}-${to_date}`,  
            numbers : ['8310484467']
        }
        fast2sms.sendMessage(options2)
        res.send({message: "request sent"})
    }catch(e){
        res.status(500).json(e)
    }
}