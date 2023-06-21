const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", true);

const dbcnt =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { dbcnt };