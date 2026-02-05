const express = require('express');
const {getDispatch, addDispatch, updateStatus, deleteDispatch} = require('../controllers/dispatch-controllers')

// create express router
const router = express.Router();

// create all routes
router.get('/get/:status', getDispatch);
router.post('/add', addDispatch);
router.put('/update/:id', updateStatus);
router.delete('/delete/:id', deleteDispatch)

module.exports = router;