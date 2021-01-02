import { Telegraf } from "telegraf"
import { Application, Router } from "@cfworker/web"
import createTelegrafMiddware from "cfworker-middware-telegraf"

const bot = new Telegraf(BOT_TOKEN)

const sendMsg = async (type: 'Web' | 'Telegram', from?: string, content?: string) => {
  await bot.telegram.sendMessage(
    698868349,
    `${from ?? 'Unknown'}@${type}: ${content ?? 'Unknown'}`
  )
}

bot.hears(/.*/, async ctx => {
  if (ctx.from?.id == 698868349) return
  await sendMsg('Telegram', ctx.from?.username, ctx.message?.text)
})

bot.catch()

const router = new Router()

router.post('/', async ctx => {
  await sendMsg('Web',
    ctx.req.headers.get('CF-Connecting-IP') ?? undefined,
    (await ctx.req.body.text()) ?? undefined
  )
  ctx.respondWith(new Response('Message has been sent to pop'))
})
router.post('/webhook', createTelegrafMiddware(bot))
router.all(async ctx => {
  const res = ctx.res
  res.body = '404 Not Found'
  res.status = 404
})
new Application().use(router.middleware).listen()
