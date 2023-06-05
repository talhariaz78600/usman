const mongoose=require('mongoose');
const {Schema}=mongoose;
const AdminSchema= new Schema({
    title:{
        type:String,
        require:true,
        
    },
    content:{
        type:String,
        require:true,
    }
})
AdminSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('haltakhome', AdminSchema);