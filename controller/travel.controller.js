var TravelService = require('../services/travel.services');



exports.add = async function(req, res, next) {
    try {
        var travel = await TravelService.add(req.body);
        return res.status(201).json({data: travel.data, status:201, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status: 400 });
    }
}

exports.delete = async function(req, res, next) {
    try {
        var deleted = await TravelService.delete(req.params.id);
        return res.status(200).json({data: deleted.data, status:200, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.update = async function(req, res, next) {
    try {
        var updated = await TravelService.update(req.params.id, req.body);
        return res.status(200).json({data:updated.data, status:200, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.get = async function(req, res, next) {
    try {
        var travel = await TravelService.get({});
        return res.status(200).json({data: travel.data, status:200, message:'Success'});

    } catch (error) {
        return res.status(404).json({ error: error, status:400});
    }
}

exports.getById = async function(req, res, next) {
    try {
        var travel = await TravelService.get({_id:req.params.id});
        return res.status(200).json({data: travel, status:200, message:'Success'})
    } catch (error) {
        return res.status(404).json({ error: error, status: 400 });
    }
}

exports.getByUser = async function(req, res, next) {
    try {
        var travel = await TravelService.get({userId:{$in:req.params.id}});
        return res.status(200).json({data: travel, status:200, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

exports.getByProvider = async function(req, res, next) {
    try {
        var travel = await TravelService.get({providerId:{$in:req.params.id}});
        return res.status(200).json({data: travel, status:200, message:'Success'});
    } catch (error) {
        return res.status(404).json({ error: error, status:404});
    }
}

