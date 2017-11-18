const express = require('express'),
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    multer = require('multer')

const port = process.env.PORT || 3000;
const app = express();

////######### HBS SETUP ############/////

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

////######### XXXXXXXXX ############/////

app.use(bodyParser.json());

// GET
app.get('/', (req, res) => {
    res.render('home')
});

const upload = multer({ dest: 'uploads/' }).single('image')

app.post('/api/uploads', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.end('images only')
        }
        res.end('file uploaded!')
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});