const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
   isRun:{type:Boolean, default: false},
}, {timestamps:true});


const Settings = mongoose.model("Settings", SettingsSchema);

module.exports = Settings;