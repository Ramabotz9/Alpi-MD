let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0821-4756-2437]
│ •  [0877-9323-6775]
╰────
Donasi Saldo
*GOPAY* [087793236775]
*DANA* [BLM ADA]
DONASI FOLLOW
ig:ahmdzakaria47
Tt:lagi pensi
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
