'use strict'
const gracefulShutdown = (server) => {
    return () => {
        server.close(() => {
            console.log('Server closed')
        })
    }
}

module.exports = {
    gracefulShutdown
}
