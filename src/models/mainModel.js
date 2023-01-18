const connection = require('./connection');

const getAll = async () => {
    const main = await connection.execute('SELECT * FROM table_name');
    return main;
};

module.exports = {
    getAll
};