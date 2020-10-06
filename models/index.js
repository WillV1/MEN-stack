const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/exercise';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connection', () => console.log('MongoDB connected...'));

mongoose.connection.on('error', err => console.log(err));

module.exports = {
    Exercise: require('./Exercise')
};