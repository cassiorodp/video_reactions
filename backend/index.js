const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);
const reactionsController = require('./controllers/reactionsController')

const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET']
  }
});

app.use(bodyParser.json());
app.use(cors());

app.use('/reactions', reactionsController);

require('./sockets/votes')(io);

http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))