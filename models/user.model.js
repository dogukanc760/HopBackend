const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name:{type:String, required:true},
   surname:{type:String, required:true},
   gsm:{type:String, required:true},
   mail:{type:String, required:true},
   img:{type:String, default:''},
   password:{type:String, required:true},
   card:{type:Array, default:['1111','00/00',"000"]},
   isActive:{type:Boolean, default:true},
   isVerified:{type:Boolean, default:false},
   isBanned:{type:Boolean, default:false},
   isProvider:{type:Boolean, default:false},
   myCar:{type:Array, default:['araç modeli', 'plaka']},
   rating:{type:Number, default:0},
   comments:{type:Array},
   iban:{type:String, default:''},
   wallet:{type:Number, default:0},
   locationCity:{type:String, default:''},
   locationDistinct:{type:String, default:''},
   plate:{type:String, default:''},
},{timestamps:true});


const User = mongoose.model('User', UserSchema);

module.exports = User;