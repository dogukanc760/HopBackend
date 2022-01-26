var NotificationService = require('../services/notification.services');


exports.add = async function (req, res, next) {
    try {
        var added = await NotificationService.add(req.body);
        return res.status(201).json({status:201, data:added, message:'Success'})
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}

exports.update = async function (req, res, next) {
    try {
        var updated = await NotificationService.update(req.params.id,req.body);
        return res.status(201).json({status:201, data:updated, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.delete = async function (req, res, next) {
    try {
        var deleted = await NotificationService.delete(req.params.id);
        return res.status(200).json({status:200, data:deleted, message:'Success'})
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}

exports.get = async function (req, res, next) {
    try {
        const notification = await NotificationService.get({});
        return res.status(200).json({status:200, data:notification, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}

exports.getById = async function (req, res, next) {
    try {
        const notification = await NotificationService.get({_id:req.params.id});
        return res.status(200).json({status:200, data:notification, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}

exports.getByLevel = async function (req, res, next) {
    try {
        const notification = await NotificationService.get({level:{$in: req.params.id }});
        return res.status(200).json({status:200, data:notification, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}