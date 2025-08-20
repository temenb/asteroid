import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export  const config = {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET!,
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET!,
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
    rabbitmqQueueProfileCreated: process.env.RABBITMQ_QUEUE_PROFILE_CREATED || 'profile.created',
};


export default config;
