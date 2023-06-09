const mongoose=require('mongoose');
const {Schema}=mongoose;
const SolutionsSchema= new Schema({
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
SolutionsSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('solution', SolutionsSchema);