# Discord Music Bot (Updated for discord.js v14)

![Discord Bot](https://img.shields.io/badge/discord.js-v14-7289DA?style=for-the-badge&logo=discord&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## About The Project

This is a powerful and up-to-date music bot for Discord, built with the latest technologies to ensure high-quality and stable audio playback. This project has been fully updated to use `discord.js` v14, `@discordjs/voice` for voice channel management, and `@distube/ytdl-core` for reliable audio streaming from YouTube.

The primary goal of this bot is to provide a simple, seamless, and high-quality music experience on Discord with minimal setup and intuitive commands.

### Key Features
- **High-Quality Audio**: Streams directly from YouTube using `@distube/ytdl-core` to provide the best possible audio quality.  
- **Modern and Stable**: Built on the latest `discord.js` v14, ensuring compatibility with the most recent Discord API updates and features.  
- **Simple and Intuitive Commands**: A straightforward command structure that is easy for any user to learn and operate.  
- **Secure by Design**: Utilizes a `config.json` file for the bot's token, keeping sensitive credentials separate from the main codebase.  

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (version 20.x or newer is recommended)  
- [Git](https://git-scm.com/)  

---

## Setup and Installation Guide

Follow these steps to get your own instance of the music bot up and running.

### 1. Clone the Repository
```bash
git clone https://github.com/xLaoztu/Discord-Music-Bot.git
cd Discord-Music-Bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create the Bot in the Discord Developer Portal
- Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**.  
- Give your application a name and click **Create**.  
- Navigate to the **Bot** tab and click **Add Bot**.  
- Enable **MESSAGE CONTENT INTENT** under "Privileged Gateway Intents".  
- Click **Reset Token** to reveal your bot's token and copy it.  

### 4. Configure Your Bot Token
Create a new file in the root of your project folder called `config.json`:

```json
{
  "token": "YOUR_SECRET_BOT_TOKEN_HERE"
}
```

⚠️ **Important:** Add `config.json` to your `.gitignore` file to prevent your token from being uploaded to GitHub.  

### 5. Invite the Bot to Your Server
- In the Developer Portal, go to the **OAuth2** tab → **URL Generator**.  
- Select the **bot** scope.  
- Under "Bot Permissions", select:  
  - Send Messages  
  - Connect  
  - Speak  
- Copy the generated URL, paste it into your browser, and invite the bot to your server.  

---

## Usage

### Play a Song
Join a voice channel and type:
```
#play <youtube_url>
```
Example:
```
#play https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### Stop the Music
```
#stop
```

---

## Running the Bot
```bash
node index.js
```

If everything is configured correctly, your terminal will display:
```
Bot is online!
```
and the bot will appear as online in your Discord server.  

---

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 Derek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...

```
