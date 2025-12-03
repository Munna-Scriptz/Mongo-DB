const mongoose = require('mongoose');

const dbConnect = ()=>{
    return mongoose.connect('mongodb+srv://Munna-Scriptz:mLuMYoUT1ZbtakeP@cluster0.1xmbxqk.mongodb.net/Test-Users?appName=Cluster0')
    .then(() => console.log('DB Connected!'));
}

module.exports = dbConnect