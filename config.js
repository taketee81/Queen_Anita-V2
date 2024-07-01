//Mr Take Tee 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1WWGZaeC91OVZtZG1oOERGeng4ZGFWSHBsc3YveExValhjR2Y5aGIxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGZscGprdGs2TG9HMVdyaFZjL3VlVS84M21YQ3VVOFNUeFRWNWZ2UzJnTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRGp3WEFFN0tQRTNnQlhqOVl1YktWOWpmNjlOV3phRDFPSTZFaHpUV2tnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMThHWThBbjRmMm5WUXgyTzNEeVFiR3RsNklWU09aMFR5a2M4dktsU1ZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNUytyR0FGYUhjU1RCVy96UWNSWS9BejlDTG96MDNnRTByMitwdUJaV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVoZWx2Q1FmSjV5ZUFxTVdvaG0rd3dLdDlHTVREUFFiNXJzNElmSnJnQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBKREZ1bHZ6dXFhTVJzTGNFK1RoQzVaY3dyMTVUU1p2Tlc5M2QyOVFIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG9FTm9raVlMSVRGZHkyVThBUDloL3RQc0NtR2Z4WVlTZzgrVE1CYm9oWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkeitPdUVidFZpWjZOUlNKTXdWeFNOMG80Mm53Z2hhZzc5c0k5YTdwbUNKTEFHbXhLZ2tlZWJna0hFVjVmYkM5aE5EVnMxeThyZm82dmt6elY3NkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5Ijoic1BWODluTmZ0VDdEVzNlanFGK095THYycFZQSHRlWVAwakZwT3k1d1Fpaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzI3NjYxOTczNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MTI2NDlEMURCODlFOEY4QTc5NzJCRUQ5RDFBRjNDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODU4NDg1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzI3NjYxOTczNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNDgzNDNDOUE0MTlEREFBQTkwRTU1RjU1RDI3OTg1NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODU4NDg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvUkdCQVNXblRnMmdHUlJKU09HY3N3IiwicGhvbmVJZCI6IjhiMWI1MjJmLTYxYTMtNDY0OS1hZWNiLTE4MzVkOWFiM2JjNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKa0Y3elZNakFtekxpSTJVcEtuU1hGUHFhYjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1mVFU1RlZKZ1pLN0p0MERYcG9GVElhanZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg0TTQxUjhZIiwibWUiOnsiaWQiOiIyMzI3NjYxOTczNDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l1WG1ZY0VFS2JxaTdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZZQTVEWFZmOEdYZUlYbitvUUlxd1hzMGVIb3A4WlZ4N1I1QkxHbTJuRlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8wK3JEbHNiNzdUOVl2c1gxanBPQ3d2dkJiSXVhZFNsWm03UU9razVEbkJIRytrN2hHbjM0Y3VuYnBQWXJvbWFFTzNlZjdQUFZPajlJZDloWjZVeEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6Sks2dDZ6V2FkdEt0ZTRRZ216QmIyTjR0NENuWFdLMFVEcHVaR2VERWQ4VE9NNlBhRjNGQlptWGZJSnZFTHpYL3VMaWlZS1lOYUs0UDVOQUlzZi9DZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMjc2NjE5NzM0OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUldBT1ExMVgvQmwzaUY1L3FFQ0tzRjdOSGg2S2ZHVmNlMGVRU3hwdHB4VSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg1ODQ4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDcTIifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "23274448130";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "MrTake Tee",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
