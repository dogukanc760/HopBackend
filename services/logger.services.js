var Logger = require('../models/logger.model');

exports.get = async function(query){
  try {
      var logger = await Logger.find(query);
      return logger;
  } catch (error) {
      return error;
  }
}

exports.add = async function(info){
    try {
        var newLogger = new Logger({
            logTitle:info.logTitle,
            logDescription:info.logDescription,
            logContent:info.logContent,
            img:info.img,
            logUser:info.logUser,
            logLevel:info.logLevel,
        });
        const savedLogger = newLogger.save();
        return newLogger;
    } catch (error) {
        return error;
    }
}

exports.update = async function(logId,info){
    try {
        const updated = await Logger.findByIdAndUpdate(
            logId,
            {$set:info},
            {new:true}
        );
        return updated;
    } catch (error) {
        return error;
    }
}

exports.delete = async function (logId){
    try {
        const deleted = await Logger.findByIdAndDelete(logId);
        return deleted;
    } catch (error) {
        return error;
    }
}