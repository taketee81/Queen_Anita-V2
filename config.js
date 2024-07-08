//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || " https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/H4qeXwa.jpeg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "23274448130";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tMMEdRQ1FlMHgrRTVLVnVQZFBWbU44dktaQVRnd1B3YU50eEZ2RzNXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHhKSFdoV2dueXZYWlJnZkRoVmNDT3pXRjFDaGRieXBlSE9IMEMyaXFEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UHZwOUhhR21OM0VQQnV6dUROcWEwQk4xQmV4NWVLTkpBNXc1QnBrYkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTmJyN1UyVGFQbzRRYTd6N084dDhMNmd6cmZOSEhlR2RJczNJRHU3K1Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLdEZ5aVlsSFRidGo3bTFYcU42cU5TNmxuTldzRWxsa0RBV21XeWpPMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkvZFMwcnlUd2Q1SGRJUWVSVDN4ZWhhZUdCMVFJVTg0TEMxWFU3SEhsejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtTMkxIL2EzNCsyZTVnVFcrVVJoWVBzL21obFhYdjVIR1BEaWptdzdtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFo2QTlrUjZYVlBuUHU3Y0tWYkZUZDdLYjQxQmVUbnNFSWtLaTVXY1Nsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV3Q3BTLzl2Z2tkRmE3S1gvNGpjdGtBdkJteVdza2grd202MnVrTkg2WDZuL1lsNmd5WE5FdC8yVEZGa3FyMmdDK0YyeTBxLzg0VG1UQkRPcVNJR2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IjROMWcxUkpVeElHZ013bjJ5RkIwQjVLVDZOZU1TeDJCd2pwRE5ZYnZaZnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndfejUzQWl2VDM2a1JKbVJlTHp5b0EiLCJwaG9uZUlkIjoiNWI0M2MxMWYtZTNlZS00ZWE1LTk0YjktZDcxZDgxMzgzYjgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CMTBDcFJPNG5uVFpscEV5QzRGaFdtTkNKQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVkNPWkdSNS9PQjFRWkZabVdlL0dmZ3E2RmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0wzQTVTTFEiLCJtZSI6eyJpZCI6IjIzMjc0NDQ4MTMwOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1yIFRha2UgVGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWGs3YVVGRU5ya2hMUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHaUJlYmdaaDczWDB5TlNaa3VNQ2xrNU9zU0xUT1NWRHcya1BGSUtNWkRFPSIsImFjY291bnRTaWduYXR1cmUiOiJRMG5Ec2k3Z2FmNEVZRVhYVEJ2R2FBL2QvdnU5aVJJNGxQY3lneUtHR2RtS3VxZ1RIRk9RZGtYeU85VGpLZ0QvMjRYYUkveWhNYUZjS29wZEE0c1FEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWVJK0VIMWVGMTdnZzcyZkU5eFh5d1F3TTV6U215Q0lVOEs1UXVISFlFNS9iSW4xT0Z3a0FJYUF3OXhsTk9XMXIyOVNDaUZHYlhxNmNCc0VzMDdNalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3NDQ0ODEzMDoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSb2dYbTRHWWU5MTlNalVtWkxqQXBaT1RyRWkwemtsUThOcER4U0NqR1F4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzQzMDgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9iQyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "      ©2024-2099 David Cyril",
  author: process.env.PACK_AUTHER || "David Cyril",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "David Cyril",
  ownername: process.env.OWNER_NAME || "Mr Take Tee",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
