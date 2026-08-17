import server from './src/app.js'
import { config } from './src/config/config.js';
import connectionDatabase from './src/db/db.js';

connectionDatabase()

server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})