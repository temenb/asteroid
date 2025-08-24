import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export  const config = {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET!,
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET!,
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
    kafkaBrokers: process.env.KAFKA_BROKERS || 'kafka:9092',
    kafkaClientId: process.env.KAFKA_CLIENT_ID || 'asteroid-client',
    kafkaTopicAsteroidCreated: process.env.KAFKA_TOPIC_ASTEROID_CREATED || 'asteroid.created',
    kafkaTopicProfileCreated: process.env.KAFKA_TOPIC_PROFILE_CREATED || 'profile.created',
};


export default config;
