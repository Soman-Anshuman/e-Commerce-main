const mongoose = require('mongoose');

 const MONGO_URI = "mongodb+srv://paliwalkapil:vi7Yg6WrjGPZ6dQJ@cluster0.gnhly63.mongodb.net/Flipkart"

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;