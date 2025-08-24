import {consumeEvent} from "./kafka";
import config from "../config/config";
import {upsertAsteroid} from "../services/asteroid.service";
import logger from "./logger";

export async function initConsumers() {
  await consumeEvent(config.kafkaTopicProfileCreated, async ({topic, partition, message}): Promise<void> => {
    try {
      logger.log('here');
      const rawValue = message.value?.toString();
      if (!rawValue) {
        logger.warn(`[Kafka] Empty message on topic=${topic}, partition=${partition}`);
        return;
      }

      const payload = JSON.parse(rawValue);
      console.log(`[Kafka] Message consumed`, {
        topic,
        partition,
        offset: message.offset,
        payload,
      });

      // const profile = await upsertAsteroid(payload.ownerId);
      logger.log(`[${topic}] Processed ownerId=${payload.ownerId}`);
      // logger.log(`[Profile service] Profile ${profile.id} created`);

      // Здесь можно добавить бизнес-логику обработки payload
    } catch (error) {
      logger.error(`[Kafka] Failed to process message`, {
        topic,
        partition,
        offset: message.offset,
        error,
      });
    }
  });

  await consumeEvent('user.created', async ({topic, partition, message}): Promise<void> => {
    try {
      logger.log('here');
      const rawValue = message.value?.toString();
      if (!rawValue) {
        logger.warn(`[Kafka] Empty message on topic=${topic}, partition=${partition}`);
        return;
      }

      const payload = JSON.parse(rawValue);
      console.log(`[Kafka] Message consumed`, {
        topic,
        partition,
        offset: message.offset,
        payload,
      });

      // const profile = await upsertAsteroid(payload.ownerId);
      logger.log(`[${topic}] Processed ownerId=${payload.ownerId}`);
      // logger.log(`[Profile service] Profile ${profile.id} created`);

      // Здесь можно добавить бизнес-логику обработки payload
    } catch (error) {
      logger.error(`[Kafka] Failed to process message`, {
        topic,
        partition,
        offset: message.offset,
        error,
      });
    }
  }, 'not-default');
}

export default initConsumers;
