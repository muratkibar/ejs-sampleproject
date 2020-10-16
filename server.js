var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.use(bodyParser());
app.use(cors());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        people: [
            { name: 'John' },
            { name: 'Jane' },
            { name: 'Jordan' }
        ]
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(process.env.listen || 8000, function() {
    console.log('Server started at 8000...');
});