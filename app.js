const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// app.set('view engine', 'ejs');

app.use('/contacts',router);

const PORT = process.env.PORT || 3030;

mongoose.connect(
        `mongodb+srv://Imran_ali:kBDDbrdXC3vT55k@cluster0.wkjey.mongodb.net/test?retryWrites=true";`,
    {useNewUrlParser: true, useUnifiedTopology: true}
     )
    .then(() => {
        app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT} .`));
    })
    .catch(err => console.log(err));


