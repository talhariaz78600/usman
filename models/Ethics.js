const mongoose=require('mongoose');
const {Schema}=mongoose;
const EthicSchema= new Schema({
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
EthicSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('ethics', EthicSchema);