const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const ExpressPeerServer = require('peer').ExpressPeerServer;
const cors = require('cors')

const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

const peer_options = {
    debug: true
};

app.options('*', cors());
app.get('*', cors());


app.use('/static', express.static('public'));



// peerjs is the path that the peerjs server will be connected to.
app.use('/peerjs', ExpressPeerServer(server, peer_options));


app.get('/**', (req, res) => {
    return res.sendfile(path.join(__dirname + '/public/index.html'));
});

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId);
        })
    });
})

server.listen(3000);