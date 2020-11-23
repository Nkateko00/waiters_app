const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
var flash = require('express-flash');
const sessions = require('express-session');
const waitersJS = require('./waiters');
const routes = require('./routes');


const pg = require("pg");
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://teko:teko123@localhost:5432/waiters_shift';
const pool = new Pool({
    connectionString
});
let app = express();
const waiters = waitersJS(pool);
const myRoutes = routes(waiters);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(sessions({
    secret: "flash string here",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use(express.static('public'));//enable use css
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',myRoutes.home);
app.post('/waiters/:username',myRoutes.daysWorked);
app.get('/waiters/:username',myRoutes.showDaysWorked);
app.get('/days',myRoutes.waitersAvailable);
app.get('/clear',myRoutes.clear);


const PORT = process.env.PORT || 2009;

app.listen(PORT, function () {
    console.log('App starting on port :' + PORT);
});