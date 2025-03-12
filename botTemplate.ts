const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
import chalk from 'chalk';
//bun i chalk qrcode-terminal whatsapp-web.js
const botSettings = {
    botName:'Dumxrg-Bot', //CAMBIALE EL NOMBRE DEL BOT
    botVersion:'0.01'
}
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu',
            '--remote-debugging-port=9222',
        ],
        timeout: 120000
    }
});

client.on('loading_screen', (percent, message) => {
    console.clear(); 
    const percentBar = (percent) => {
        console.log((`-->>                     ${botSettings.botName} V ${botSettings.botVersion}                 <<--`));
        console.log(('---------------------------------------------------------------')); 
        const totalBlocks = 30;
        const filledBlocks = Math.round((percent / 100) * totalBlocks); 
        const emptyBlocks = totalBlocks - filledBlocks; 
        const progress = `${chalk.green('■').repeat(filledBlocks)}${chalk.gray('■').repeat(emptyBlocks)}`;
        return progress;
    };
    console.log(chalk.magentaBright(`Loading Screen... [${percentBar(percent)}] ${percent}% ${message}`));
});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});
client.on('ready', () => {
    console.log(chalk.greenBright('\nLoading Complete! Client is ready!'));
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('message_create', async (m) => { // cuando te llega el mensaje
    if(m.body.toLowerCase()==='hi'){ //si el texto del mensaje en minusculas es hi
        m.reply("HOLAAAAAAAAAAAAAAAAAAAAA") //responder HOLAAAAAAAAAAAAAAAA
    }
})
console.clear()
client.initialize();
