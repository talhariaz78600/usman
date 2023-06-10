const mongoose=require('mongoose');
const {Schema}=mongoose;
const HomeSchema= new Schema({
    title:{
        type:String,
        require:true,
        
    },
    contentId:{
        type:String,
        require:true,
    },
    page:{
        type:String,
        require:true
    }
})
HomeSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('haltakhome', HomeSchema);