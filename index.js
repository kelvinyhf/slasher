require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// Help
app.command("/slasher-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/slasher-hello - Greeting from Slasher
/slasher-ping - Check bot latency
/slasher-trivia - Get a random trivia about the world`
  });
});

// Hello
app.command("/slasher-hello", async ({ command, ack, respond }) => {
  await ack();
  await respond({
    response_type: "in_channel",
    text: "Hello! I am Slasher, a Slackbot made by KelvinY. Type /slasher-help to see all the commands."
  });
});

// Ping
app.command("/slasher-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Latency: ${latency}ms` });
});

// Trivia
app.command("/slasher-trivia", async ({ command, ack, respond }) => {
  await ack();
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await response.json();
    await respond({
      response_type: "in_channel",
      text: `${data.text}`
    });
  } catch {
    await respond({ text: "Something went wrong, please try again later." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
