import dotenv from 'dotenv';

dotenv.config();

export  const kafkaConfig = {
    brokers: process.env.KAFKA_BROKERS || 'kafka:9092',
    clientId: process.env.KAFKA_CLIENT_ID || 'asteroid-client',
    topicAsteroidCreated: process.env.KAFKA_TOPIC_ASTEROID_CREATED || 'asteroid.created',
    topicProfileCreated: process.env.KAFKA_TOPIC_PROFILE_CREATED || 'profile.created',
};


export default kafkaConfig;
