import server from './app';
import * as grpc from '@grpc/grpc-js';
import {createConsumer} from "./consumers/profileCreated.consumer";
import config from "./config/config";

const PORT = process.env.PORT || 3000;

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`🚀 gRPC server running on port ${PORT}`);
});

server.tryShutdown(() => {
    console.log('✅ gRPC server gracefully shut down');
});

createConsumer('asteroid-events', config.rabbitmqQueueProfileCreated);