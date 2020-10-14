const express = require('express');
const mongoose = require('mongoose');

const app = express();

// app.set('view engine', 'ejs');



const PORT = process.env.PORT || 3030;

mongoose.connect(
        `mongodb+srv://Imran_ali:kBDDbrdXC3vT55k@cluster0.wkjey.mongodb.net/test?retryWrites=true";`,
    {useNewUrlParser: true, useUnifiedTopology: true}
     )
    .then(() => {
        app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT} .`));
    })
    .catch(err => console.log(err));


