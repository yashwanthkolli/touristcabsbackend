var mongoose=require("mongoose")

var AirportRequestSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    pick_place: String,
    drop_place: String,
    from_date: String,
    status: {
        type: String,
        default: 'pending',
        enum:['pending', 'rejected', 'done', 'seen']
    },
    meta: {
        created: {type: Date, default: Date.now}
    }
})

module.exports=mongoose.model("AirportRequest",AirportRequestSchema)