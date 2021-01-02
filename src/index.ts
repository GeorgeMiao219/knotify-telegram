import { Telegraf, Context, Extra } from "telegraf"
import { Application, Router } from "@cfworker/web"
import createTelegrafMiddware from "cfworker-middware-telegraf"

const router = new Router()

const bot = new Telegraf('1463006128:AAG_K2kZwh45U3FCXmEsX-kPDIAt-e1Whrk')


const sendMeMsg = async (ctx: Partial<Context>) => {
  bot.telegram.sendMessage("698868349", `@${ctx.from?.username}: `)
}

bot.hears(/.*/, async ctx => {
  bot.telegram.sendMessage("698868349", `@${ctx.from?.username}: `)
})


router.post('/webhook', createTelegrafMiddware(bot))
new Application().use(router.middleware).listen()
