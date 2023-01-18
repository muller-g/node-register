const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', (req,res) => 
    res.status(200).send('tudo ok por aq')
);

router.get('/main', mainController.getAll);

module.exports = router;