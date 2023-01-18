const mainModel = require('../models/mainModel'); 

const getAll = async (req, res) => {

    const main = await mainModel.getAll();

    return res.status(200).json(main);
};

module.exports = {
    getAll
};