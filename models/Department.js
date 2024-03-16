const mongoose=require('mongoose');
const {Schema}=mongoose;
const DepartmentSchema= new Schema({
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
    home:{
        type:Boolean
    },
    date:{
        type: Date,
        default: Date.now
    }
})
DepartmentSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('department', DepartmentSchema);