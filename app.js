const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.get('/about', (req, res)=>{

    let pageTitle= "About";

   res.render('pages/about',{pageTitle});
});
app.get('/', (req, res)=> {

    let title = "EJS Title";
    let pageTitle= "Home";
    let posts = [
        {
            id: 1,
            title: "1st Post Title",
            body: "Our Post Body",
            published: false
        },
        {
            id: 2,
            title: "2nd Post Title",
            body: "Our Post Body",
            published: false
        },
        {
            id: 3,
            title: "3rd Post Title",
            body: "Our Post Body",
            published: false
        },
        {
            id: 4,
            title: "4th Post Title",
            body: "Our Post Body",
            published: false
        },

    ];

    res.render('pages/index', {title, posts, pageTitle});
});


const PORT = process.env.PORT || 3030;
app.listen(PORT, ()=> console.log(`Server is Running on PORT: ${PORT} .`));

