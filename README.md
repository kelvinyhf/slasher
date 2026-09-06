# Hi, I am...

<img src="./images/banner.jpeg" alt="Slasher Banner" height="360" />

## Commands
- **/slasher-help** - Show a list of all commands
- **/slasher-hello** - Greeting from Slasher
- **/slasher-ping** - Check bot latency
- **/slasher-trivia** - Get random trivia about the world
- **/slasher-ask** - Ask Slasher anything

## /slasher-trivia?
Slasher fetches random useless facts about the world using [this free API](https://uselessfacts.jsph.pl/api/v2/facts/random?language=en), and then uses `data.text` to display them to you, which takes less than 2 seconds 🚀

<img src="./images/trivia.jpeg" alt="An example of /slasher-trivia response" height="320" />

## /slasher-ask?
Slasher sends your prompt to [his Cloudflare Worker AI clone](https://slasher.kelviny.workers.dev), and then throws his clone's response back to you.

<img src="./images/ask1.jpeg" alt="A user typed '/slasher-ask idk'" height="320" />

(AI response usually takes 10-15 seconds, idk why that long :/)

<img src="./images/ask2.jpeg" alt="Slasher's response" height="320" />
