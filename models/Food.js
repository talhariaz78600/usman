const mongoose=require('mongoose');
const {Schema}=mongoose;
const FoodSchema= new Schema({
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
FoodSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('food', FoodSchema);