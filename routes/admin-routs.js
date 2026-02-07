const express = require("express");

const router = express.Router();

router.get('/create', (req, res) => {
    console.log('welcome to admin page');
    res.send('welcome to admin page');
});

module.exports = router;