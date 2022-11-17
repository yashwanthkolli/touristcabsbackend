const Subscription = require('../models/subscriction')

exports.subscription_register = async(req, res) => {
    try{
        const { email } = req.body
        const subscription = new Subscription({email})
        await subscription.save()
        res.send({message: "mail id subscribed"})
    }catch(e){
        res.status(500).json(e)
    }
}