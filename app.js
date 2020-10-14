const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

let Schema = mongoose.Schema;

let testSchema = new Schema({
    name: String
});


let Test = mongoose.model('Test', testSchema);


app.get('/', (req, res)=>{

    let test = new Test({
        name: "IA Masum"
    });

    test.save()
        .then(t => res.send(t))
        .catch(err => console.log(err));
})


const PORT = process.env.PORT || 3030;

mongoose.connect(
        `mongodb+srv://Imran_ali:kBDDbrdXC3vT55k@cluster0.wkjey.mongodb.net/test?retryWrites=true";`,
        {useNewUrlParser: true}
     )
    .then(() => {
        app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT} .`));
    })
    .catch(err => console.log(err));


