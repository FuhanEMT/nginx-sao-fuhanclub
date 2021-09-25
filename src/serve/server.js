const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http , {
    cors: {
        origin: 'http://localhost:4200',
        methods: ["GET","POST"],
        credentials: true
    }
})


io.on('connection' , (socket) => {
    console.log('New socket Connection')
})

const PORT = 4000 || process.env.PORT

http.listen(PORT, () => console.log(`Server running on port ${ PORT }`))

