const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://nominm97:facebook1!@localhost/?authMechanism=DEFAULT');

module.exports = mongoose.connection;
