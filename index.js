const { Client, GatewayIntentBits } = require('discord.js');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    entersState,
    StreamType,
    VoiceConnectionStatus,
} = require('@discordjs/voice');
const ytdl = require('@distube/ytdl-core');
const fs = require('fs');

// It's best practice to store your token in a separate config.json file
// Create a file named 'config.json' and add: { "token": "YOUR_BOT_TOKEN" }
const { token } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const player = createAudioPlayer();

client.once('clientReady', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async message => {
    if (message.author.bot || !message.guild) return;

    if (message.content.startsWith('#play')) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('You need to be in a voice channel to play music!');
        }

        const args = message.content.split(' ');
        const songUrl = args[1];

        if (!ytdl.validateURL(songUrl)) {
            return message.reply('Please provide a valid YouTube URL!');
        }

        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        try {
            await entersState(connection, VoiceConnectionStatus.Ready, 30_000);

            const stream = ytdl(songUrl, {
                filter: 'audioonly',
                quality: 'highestaudio',
                highWaterMark: 1 << 25,
            });

            const resource = createAudioResource(stream, {
                inputType: StreamType.Arbitrary,
            });

            player.play(resource);
            connection.subscribe(player);

            message.reply(`Now playing: ${songUrl}`);

        } catch (error) {
            console.error(error);
            connection.destroy();
            message.reply('There was an error connecting to the voice channel!');
        }
    } else if (message.content === '#stop') {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        player.stop();
        connection.destroy();
        message.reply('Playback stopped and I have left the channel.');
    }
});

client.login(token);


