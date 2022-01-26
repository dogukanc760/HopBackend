const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  userFromId: { type: String, default: 0 },
  userToId: { type: String, required: true },
  userFrom: { type: Array },
  userTo: { type: Array },
  level: { type: Number, default: 0 },
  title: { type: String, default: "" },
  subTitle: { type: String, default: "" },
  img: { type: String, default: "" },
  content: { type: String, default: "" },
  isSystem: { type: Boolean, default: false },
  isRead: { type:Boolean, default: false },
}, {timestamps:true});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;