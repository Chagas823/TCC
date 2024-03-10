const express = require('express');
const keyManagerController = require('../controller/KeyManagerController');

const router = express.Router();

router.route("/gen").post(keyManagerController.gen);
router.route("/sign").post(keyManagerController.sign);

module.exports = router;