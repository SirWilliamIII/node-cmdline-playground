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
app.use(bodyParser.json());

////######### XXXXXXXXX ############/////

// GET
app.get('/', (req, res) => {
    res.render('home')
});


app.post('/api/uploads', (req, res) => {
    const upload = multer({
        dest: 'uploads/',
        limits: { size: 500000000 },
        fileFilter: (req, file, cb) => {
            cb(null, false)
                //cb(null, true)
        }
    }).single('image')


    upload(req, res, function(err) {
        if (err) {
            return res.status(400).send('only images allowed')
        }
        res.send('file uploaded!')
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});