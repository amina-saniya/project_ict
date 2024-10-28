var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cpharshida:harshidacp@cluster0.w8ntb.mongodb.net/jobs?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Mongodb connected successfully')
    })
    .catch((err) => { 
        console.log(err)
    })