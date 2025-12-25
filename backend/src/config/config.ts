import {config as confg} from 'dotenv';
confg();

const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_CONNECTION_STRING
}

export const config = Object.freeze(_config);