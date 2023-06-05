const mongoose=require('mongoose');
const {Schema}=mongoose;
const TradeSchema= new Schema({
    title:{
        type:String, 
    },
    content:{
        type:String,
    },
    topic:{
        type:String,
    },
    picture:{
        type:String,
    },

    date:{
        type: Date,
        default: Date.now
    }
})
TradeSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('trade', TradeSchema);