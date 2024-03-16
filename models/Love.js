const mongoose=require('mongoose');
const {Schema}=mongoose;
const LoveSchema= new Schema({
    title:{
        type:String, 
    },
    content:{
        type:String,
    },
    topic:{
        type:String,
    },
    home:{
        type:Boolean
    },
    picture:{
        type:String,
    },

    date:{
        type: Date,
        default: Date.now
    }
})
LoveSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('message-of-love', LoveSchema);