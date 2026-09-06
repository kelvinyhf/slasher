# Slasher
A friendly Slackbot!
![Slasher Banner](./images/banner.png)

## Commands
- **/slasher-help** - Show a list of all commands
- **/slasher-hello** - Greeting from Slasher
- **/slasher-ping** - Check bot latency
- **/slasher-trivia** - Get a random trivia about the world
- **/slasher-ask** - Ask Slasher anything

## /slasher-trivia?
![Example of /slasher-trivia response](./images/trivia.png)
Slasher fetchs some random useless facts about the world using [this free API](https://uselessfacts.jsph.pl/api/v2/facts/random?language=en), and then use `data.text` to display it to you, takes less than 2 seconds 🚀

## /slasher-ask?
![Example of /slasher-ask response](./images/ask.png)
Slasher sends your prompt to [his Cloudflare Worker AI clone](https://slasher.kelviny.workers.dev), and then throw his clone's response back to you via `response.response`, or maybe a `response.error`? 😈
(AI response usually takes 10-15  seconds, idk why that long :/)
