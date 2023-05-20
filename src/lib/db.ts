import { Redis } from '@upstash/redis'

// now to integrate redis in our app we write following code

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})
