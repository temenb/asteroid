// import { PrismaClient } from '@prisma/client';
// import config from '../config/config';
// import {broadcastEvent} from "../utils/kafka";
//
// const prisma = new PrismaClient();
//
// export async function findAsteroid(ownerId: string) {
//   return prisma.asteroid.findFirst({ where: { ownerId } });
// }
//
//
// export async function upsertAsteroid(ownerId: string) {
//
//   const existing = await prisma.asteroid.findFirst({ where: { ownerId } });
//
//   if (existing) {
//     return existing;
//   }
//
//   const asteroid = await prisma.asteroid.create({
//     data: {
//       ownerId: ownerId,
//       galaxyId: 'galaxy-456',
//       asteroidType: 'BASE',
//       ownerType: 'PLAYER',
//       resourceType: 'IRON',
//       asteroidGrade: 'EPIC',
//       axisX: 42,
//       axisY: 17,
//       health: 100,
//       // name: 'Zeta-9',
//     },
//   });
//
//
//   broadcastEvent(config.kafkaTopicAsteroidCreated, [{ value: JSON.stringify({ id: asteroid.id }) }]);
//
//   return asteroid;
// }
