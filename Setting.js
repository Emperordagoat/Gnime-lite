const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348039607375' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ;
global.port=8000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Gnime-lite' ;
global.location = 'Lagos Nigeria' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = 'https://github.com/Astropeda' ; 
global.sudo =  process.env.SUDO || "2348039607375";
global.devs = "2348039607375";
global.mztit = process.env.MZTIT ||"ɢɴɪᴍᴇ-ʟɪᴛᴇ",
global.Gname = process.env.GNAME ||"ɢɴɪᴍᴇ ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://github.com/Astropeda',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/KFe2GEMBZ9eI1bpNVotZOW",
global.website = 'https://github.com/Astropeda' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://leadier-umbrellas.000webhostapp.com/1.jpg' ;
//---------------------------------------------------------------------------
//-------------------------------------
module.exports = {
  sessionName: process.env.SESSION_ID || 'lite;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1A5Q0dObGNHL0oxNlh0eHpqK0JlM1JJR0Nua2hUZlpqdGpoL3dUN1owdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnRWU3VhQUpkWDAwZE5tRDFUeVpMc2g4RWp3SUVTdlBsQUt1RmNuMGkzWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTCtia0pKTnVIa2srZWNaRDJZUlhITWFPVkw2dTNzWlVLaDRnMHdIL2tZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VXVad1NBNDhCMElOdjVENlpMSWFBQ1NHdGxuczNHdXBaMVdsZTVValZNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHM0JnN2tmU2Z4ZE81cWhFdXFGK3VsSGt2c2k0b3lJR25NNFVpVU5VMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im16bWtCclFzUU9McmxTcSsyVzJ5b0dIaVRVUjUweDhxNXpIQ2t5KzlVVnc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIydFphZTM4YXBCUGNaRmhqK1NjaHBHc3dlNHV1RnZtdGhNdXQ0YmI1Sm80Z2lpcXhGLzlNSHVVUGwrOTBsV0p2Z29COE11WGN6WUo2Rm8reUJqendpQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MywiYWR2U2VjcmV0S2V5IjoiVllpMFlGb1hWZzEwNHlMRUwxWitERC9qbDh6b3gvT2VHcTNuUGZ6ZGFwST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibV9PTzBUSzhST1dkZWRMWDJ6RFJFUSIsInBob25lSWQiOiI1MTQxM2I4OS1kZWZlLTRlYjYtYmVlNi1iMjVhOTRkYmQyNDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlJTnl0QmVaaHh1SEgyeDlGMHB5dUFLMjlzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSYXNIU0hNMHRqVk93OWduUFlzRnJlUkx3Y0U9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcVFwbTRRODlqZXJBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyU2IzdlE2bnNoNjdPdVpvMkk2UHNQcndNaDd2VmpUVElpeW8yL0NQdDE4PSIsImFjY291bnRTaWduYXR1cmUiOiIxRU5vVlJJWTM0cTVaVlEycWE3RGVzbnRNVHZ3NE5DTFJGYnQ2SkwzTlJpdDIxWDR4a2lmNjdGTUM0R3B3azEvWHNCWWdUdnc0V3FlU0JPaTFwOUhEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGhUZ0Nrb2szaVUrdXBlR01NMFFzc3k3RnhmMzV0UkNLUlNUd056cjJnYVZjcTZpaWJjb1JBbWFsUklGMFhNbVM3MDRsUmhJeWl0bGtqcHgvbU5taGc9PSJ9LCJtZSI6eyJpZCI6IjIzNDgwMzk2MDczNzU6NDVAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAzOTYwNzM3NTo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJka205NzBPcDdJZXV6cm1hTmlPajdENjhESWU3MVkwMHlJc3FOdndqN2RmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0NDM4OTAyfQ==',
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
