import { env } from './env/index'
import { knex } from './database'
import fastify from 'fastify'

const app = fastify()

// app.get('/hello', async () => {
//   const todos = await knex('todos')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'teste de todo',
//       description: 'descrição do todo',
//       completed_at: null,
//     })
//     .returning('*')
//   return todos
// })

app.get('/hello', async () => {
  const todos = await knex('todos').select('*')

  return todos
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runnings')
  })
