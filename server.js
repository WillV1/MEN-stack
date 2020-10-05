const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 4000;

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));
