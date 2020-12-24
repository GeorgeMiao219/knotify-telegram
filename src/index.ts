
import { Telegraf } from "telegraf";
import { Application, Router } from "@cfworker/web"
import createTelegrafMiddware from "cfworker-middware-telegraf"

const bot = new Telegraf('BOT_TOKEN')

// Your code here, but do not `bot.launch()`

const router = new Router()
router.post('/SECRET_PATH', createTelegrafMiddware(bot))
new Application().use(router.middleware).listen()
