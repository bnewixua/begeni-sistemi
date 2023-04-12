const { EmbedBuilder } = require("discord.js");
const wixua = require("croxydb");
module.exports = {
  name: "beğen",
  description: "Botun pingini gösterir!",
  type: 1,
  options: [

    {
      name: "kullanıcı",
      description: "Beğeneceğin kullanıcıyı gir",
      type: 6,
      required: true,

    },
    {
      name: "sebep",
      description: "Beğeni sebebini gir",
      type: 3,
      required: true,

    },


  ],
  run: async (client, interaction) => {

    const kanalid = "1081611207439552582"

    const kullanıcı = interaction.options.getMember('kullanıcı')
    let sebep = interaction.options.getString('sebep')

    const ne = new EmbedBuilder()
    .setTitle("Çok akıllı olma kendine beğeni atamassın")
    .setColor("Red")

    if(kullanıcı.id === interaction.user.id) return interaction.reply({ embeds: [ne] })

    const gonderdi = new EmbedBuilder()
    .setColor("Green")
    .setDescription(`> **${kullanıcı} Adlı kullanıcıyı beğendin**`)

    interaction.reply({ embeds: [gonderdi], ephemeral: true })

    const embed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle("Plasma | Beğeni sistemi")
    .setDescription(`**👤 Beğenen: <@${interaction.user.id}>**\n\n**❤️ Beğenilen: ${kullanıcı}**\n\n**🍁 Sebep: "${sebep}"**`)
    .setFooter({text: "Plasma Code"})

    client.channels.cache.get(kanalid).send({ embeds: [embed] })

    wixua.set(`beğeni_${kullanıcı.id}_${interaction.guild.id}`, +1 )


  }
}
