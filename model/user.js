const mongoose =require("mongoose");
const SecretSchema = mongoose.Schema({
    UID:String,
    Email:String,
},{
    timestamps:true,
})

const Secret=new mongoose.model("Secret",SecretSchema);
module.exports =Secret