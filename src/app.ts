import dotenv from 'dotenv';
import { AsteroidService } from './generated/asteroid';
import * as grpc from '@grpc/grpc-js';
import * as asteroidHandler from "./grpc/handlers/asteroid.handler";
import config from "./config/config";
import {initKafka} from "./utils/kafka";
// import initConsumers from "./utils/conumers";

dotenv.config();

const server = new grpc.Server();

server.addService(AsteroidService, {
    // register: asteroidHandler.register,
    // login: asteroidHandler.login,
    // refreshTokens: asteroidHandler.refreshTokens,
    // logout: asteroidHandler.logout,
    // forgotPassword: asteroidHandler.forgotPassword,
    // resetPassword: asteroidHandler.resetPassword,
  health: asteroidHandler.health,
  status: asteroidHandler.status,
  livez: asteroidHandler.livez,
  readyz: asteroidHandler.readyz,
});

export default server;

async function kafka() {
  await initKafka(config.kafkaClientId);
  // await initConsumers();
}

kafka();

