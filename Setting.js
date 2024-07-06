const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2347041620617' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ;
global.port=8000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Emperordagoat/Gnime-lite' ;
global.location = 'Lagos Nigeria' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = 'https://github.com/Emperordagoat' ; 
global.sudo =  process.env.SUDO || "2347041620617";
global.devs = "2347041620617";
global.mztit = process.env.MZTIT ||"Emperor-md",
global.Gname = process.env.GNAME ||"ɢɴɪᴍᴇ ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://github.com/Emperordagoat',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/KFe2GEMBZ9eI1bpNVotZOW",
global.website = 'https://github.com/Emperordagoat' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://leadier-umbrellas.000webhostapp.com/1.jpg' ;
//---------------------------------------------------------------------------
//-------------------------------------
module.exports = {
  sessionName: process.env.SESSION_ID || 'lite;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpzL1dYcDM2T200NVNWVGlZL3ZxQ0MvUUgyVlkxdm13c1QvK0ZPVjBXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3FDTkJhQWNDQU10bUhVMHRQQlRjNHBQL21XOHZLQnhXWCtZa1BBcFBUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQTBhdzY3M0wrQkpVT25NMWxKaEpsK2dTWmpJUWFNZ2hOZ09Jd0NHYkdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtcDBObEdha1lpam9CYXZWSVc5dXFIZUJ5VDJPQUpSS1hMT1JkeVhRT0JvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1GaXR1eW1WOUorOE5OWXFHdm0wYWxxbFc0WE9uTW44Zmk0TXY4RURuVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlhcnlyaWpxZ3hvSjhYYTRPbzFwMFpZdWJ1WVNCTEtKNXhtR2d4NDN1RUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9kc0NMV0VTbW9MZkZQL0pnZHQ5L3BpaHZIUjYwZmpxTy9veGk4NkVHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDNkNzNMVmM2LzVuTG9wdnRBSE5pWmd5YVQwL3hHMTNaNVZpZlZ2K1pqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVWNUxJdnUvNncvZnBUTjNMbmFWNDMyWE5GS3NBZDhwS1gvTjhJS1BLUXFjNUNmRkZZZURuWTZNOE12djFmZlArUElHeGozb1dFNlVnQXhETXZQK0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImZhaTgwTm9WcXd1VFFVZ0pLUWtlelpsZjVzV05KSjNrRkFVc2VjUDB3cDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNycVUxX0hHUWwteDZiejVsVkZzMWciLCJwaG9uZUlkIjoiMTE0NjFmMDgtNDU5ZC00ZmMxLWI3ODktZjQ1Y2FlYTYwNGI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhPZ3VXT2diUTVka2pJRjJJVUdHS0gxaHh0MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkb20yZm1iaXhSTjMzV2h5RkU3NEs0QW1wQW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUoxTDc3TVgiLCJtZSI6eyJpZCI6IjIzNDcwNDE2MjA2MTc6NThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BySzdyNEZFTHlrcExRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9xM002Mm9LMjY3THdrK3JKZjlwdXIvNHc1NTNqb3l6dmhBY1NRSzJEUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1uMlBYRVhZVlg0VGplemtCWWtRb28rRE1OTGdacmMwSjl4OHBJY1dqNlJJcFB6WHNsYWtxcWdnRjNoMVRDdHlPWStrOW9GMGtZL1BDNjFSOVhWTEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDRUZTa0VQMUE1OERDR0VGMXh2MDloM3RNdDdIOTk3Q0tzQXFZYkN4Ym1UUExSaXJ2TmdXOVpqZVRWTm5lOUtrWTJ0THhMbndBY3NQRERNR0ZkUGhBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDE2MjA2MTc6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHF0ek90cUN0dXV5OEpQcXlYL2FicS8rTU9lZDQ2TXM3NFFIRWtDdGcwViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI1OTE0NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFENFUifQ==',
  botname: process.env.BOT_NAME || 'ɢɴɪᴍᴇ ᴍᴅ',
  ownername:  process.env.OWNER_NAME || `ᴀsᴛʀᴏ`,
  author:  process.env.PACK_AUTHER || 'ᴀsᴛʀᴏ', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "ɢɴɪᴍᴇ ᴍᴅ" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'warn',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɴɪᴍᴇ ᴍᴅ* ",  
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || 'V.1.50',
  LANG: process.env.THEME|| 'GNIME',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
