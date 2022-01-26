const mongoose = require('mongoose');

const LoggerSchema = new mongoose.Schema({
   logTitle:{ type: String, default: ''},
   logDescription:{ type: String, default:''},
   logContent:{ type: String, default:''},
   img:{ type: String, default:''},
   logUser:{ type: String, default:''},
   logLevel:{ type: Number, default:''},
   
}, {timestamps:true});


const Logger = mongoose.model("Logger", LoggerSchema);

module.exports = Logger;