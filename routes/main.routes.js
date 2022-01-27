const router = require('express').Router();
const Settings = require("../models/settings.model");

//set app
router.post('/runapp', async (req, res, next) => {
    try {
        const setting = new Settings({
            isRun: true,
        });
        const savedSettings = await setting.save();
        res.status(201).json({data:savedSettings, status:201, message:'Success'});
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: error});
    }
});

//stop app
router.put('/stop-app-because-me', async (req, res, next) => {
    try {
        const firstDoc = await Settings.findOne();
        firstDoc.isRun = false;
        res.status(200).json({data:firstDoc, status:200, message: "Success"});
    } catch (error) {
        res.status(404).json({ error: error});
    }
})

//run app
router.put('/run-app-because-me', async (req, res, next) => {
    try {
        const firstDoc = await Settings.findOne();
        firstDoc.isRun = true;
        res.status(200).json({data:firstDoc, status:200, message: "Success"});
    } catch (error) {
        res.status(404).json({ error: error});
    }
})

module.exports = router;