const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 4000;

app.set('view engine', 'ejs');

//Public views for css file
app.use( express.static( "public" ) );

//Controller
const workoutCtrl = require('./controllers/workoutController');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//Home route
app.get('/', (req, res) => {
    res.render('index');
});

//Fruits routes
app.use('/workouts', workoutCtrl);

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));
