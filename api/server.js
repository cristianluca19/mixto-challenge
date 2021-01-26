require('dotenv').config();
const mongoose = require('mongoose');
require('./models/User')
const User = mongoose.model('User');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose Connection ERROR: " + err.message)
});


mongoose.connection.once('open', () => {
    // User.remove(() => {
    //     console.log("Users removed!!");
    // })
    console.log("MongoDB Connected!")
});


const app = require("./app");

const server = app.listen(8000, () => {
    console.log("Server listening on port 8000");
});

