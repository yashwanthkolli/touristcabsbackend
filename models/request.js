var mongoose=require("mongoose")

var RequestSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    car:String,
    from_date: String,
    to_date: String,
    status: {
        type: String,
        default: 'pending',
        enum:['pending', 'rejected', 'done', 'seen']
    },
    meta: {
        created: {type: Date, default: Date.now}
    }
})

module.exports=mongoose.model("Request",RequestSchema)