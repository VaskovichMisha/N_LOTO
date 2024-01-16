import { getAsync, postAsync  } from './config.js'

// POST REQUESTS

export async function registration(data) {
  return await postAsync('/api/v1/registration', data)
}

export async function  login(data) {
  return await postAsync('/api/v1/login', data)
}