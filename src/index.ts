import { Api, Bot, Context } from "grammy";
import {
  hydrateApi,
  hydrateContext,
  type HydrateApiFlavor,
  type HydrateFlavor,
} from "@grammyjs/hydrate";
import { autoRetry } from "@grammyjs/auto-retry";
import { autoThread } from "@grammyjs/auto-thread";
import { hydrateReply, type ParseModeFlavor } from "@grammyjs/parse-mode";
import { type FileFlavor } from "@grammyjs/files";

type AppContext = FileFlavor<
  ParseModeFlavor<
    HydrateFlavor<
      Context & {
        config: {
          adminId: number;
          isAdmin: boolean;
        };
      }
    >
  >
>;

type AppApi = HydrateApiFlavor<Api>;

const bot = new Bot<AppContext, AppApi>(process.env["TGBOT_TOKEN_LNKMSG"]!);

bot.api.config.use(autoRetry());
bot.use(autoThread());
bot.use(hydrateContext());
bot.api.config.use(hydrateApi());
bot.use(hydrateReply);

// Try to code...
//bot.on("message:text", ctx => {
//  ctx.reply("114514");
//});
