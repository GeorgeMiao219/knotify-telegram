const Telegraf = require('telegraf')
const bot = new Telegraf('1463006128:AAG_K2kZwh45U3FCXmEsX-kPDIAt-e1Whrk')

// set webhook
bot.telegram.setWebhook('https://knotify.miao.dev/webhook').then(
  console.log
)

bot.telegram.getWebhookInfo().then(console.log)