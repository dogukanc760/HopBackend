var LoggerService = require('../services/logger.services');


exports.add = async function (req, res, next) {
    try {
        var logger = await LoggerService.add(req.body);
        return res.status(201).json({data: logger, status:201, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404 });
    }
}

exports.update = async function (req, res, next) {
    try {
        var logger = await LoggerService.update(req.params.id, req.body);
        return res.status(201).json({data: logger, status:201, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.delete = async function (req, res, next){
    try {
        var logger = await LoggerService.delete(req.params.id);
        return res.status(200).json({status:200, data:logger, message:'Success'})
    } catch (error) {
        return res.status(400).json({message: error, status:400});
    }
}

exports.get = async function (req, res, next) {
    try {
        const logger = await LoggerService.get({});
        return res.status(200).json({status:200, data:logger, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.getById = async function (req, res, next) {
    try {
        const logger = await LoggerService.get({_id:req.params.id});
        return res.status(200).json({status:200, data:logger, message:'Success'});
    } catch (error) {
        return res.status(404).json({message: error, status:404});
    }
}

exports.getByLevel = async function (req, res, next) {
    try {
        const logger = await LoggerService.get({logLevel:{$in:req.params.id}});
        return res.status(200).json({status:200, data:logger, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404})
    }
}

