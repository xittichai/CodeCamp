const config = require('./config.json'),
    app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    res.send('Ok');
});

app.post('/', (req, res) => {
    console.log('Post request');
    res.send('Ok');
});

app.listen(config.port, () => console.log(`Server is running on port ${config.port}.`));

const database = require('./databases/database');

database('./databases/users.json')