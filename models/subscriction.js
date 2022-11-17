var mongoose=require("mongoose")

var SubscriptionSchema=new mongoose.Schema({
    email:String
})


module.exports=mongoose.model("Subscription",SubscriptionSchema)