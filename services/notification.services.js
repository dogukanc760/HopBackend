var Notification = require('../models/notification.model');

exports.get = async function(query){
    try {
        var notification = await Notification.find(query);
        return notification;
    } catch (error) {
        return error;
    }
}

exports.add = async function(info){
    try {
        var newLogger = new Notification({
           userFromId:info.userFromId,
           userToId:info.userToId,
           userFrom:info.userFrom,
           userTo:info.userTo,
           level:info.level,
           title:info.title,
           subTitle:info.subTitle,
           img:info.img,
           content:info.content,
           isSystem:info.isSystem,
           isRead:info.isRead,
        });
        const savedLogger = await newLogger.save();
        return newLogger;
    } catch (error) {
        return error;
    }
}

exports.update = async function (notification, info){
    try {
        const updated = Notification.findByIdAndUpdate(
            notification,
            {$set: info},
            {new:true}
        );
        return updated;
    } catch (error) {
        return error;
    }
}

exports.delete = async function (notificationId){
    try {
        const deleted = Notification.findByIdAndDelete(notificationId);
        return deleted;
    } catch (error) {
        return error;
    }
}