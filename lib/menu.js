exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *#sticker*
║╰───────────
╠════════════════════
║╭──❉ *AUTO DOWNLOAD* ❉──
║│1. *#ytmp3* <linkyoutube>
║│2. *#ytmp4* <linkyoutube>
║│3. *#tiktok* <linktiktok>
║│4. *#ig* <linkIg>
║│5. *#fb* <linkFb>
║│6. *#twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wiki* <query>Wikipedia.
║│2. *#nulis* <teks>
║│3. *#quran*
║│4. *#pantun*
║│5. *#nama* <nama anda>
║│6. *#pasangan* <Aris & Cahya>
║│7. *#lirik* <nama lagu>
║│8. *#chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#sholat* <daerah>
║│2. *#covid*
║│3. *#infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *#creator*
║│2. *#owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#tts* <teks>
║│2. *#quotes*
║│3. *#donasi*
║│4. *#foto cewek*
║│5. *#foto cowok*
║│6. *#pokemon*
║│7. *#loli*
║│8. *#fotoanime*
║│9. *#namaninja* <nama lu>
║│10. *#alay*  <teks>
║│11. *#say*  <teks>
║│12. *#infoig* <@_sadboy.ig>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY DULMUKTI*
╚════════════════════`
}
