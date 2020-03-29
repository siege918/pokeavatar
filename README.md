# pokeavatar

Assigns avatars to users based on numeric id.

Uses sprites from The Spriters Resource: https://www.spriters-resource.com/game_boy_gbc/pokemongoldsilver/sheet/52692/

## Usage

Using this program requires Node.js to be installed on your machine: https://nodejs.org/en/

In a command line, run "npm start" or "node index.js" while in this folder. You can then navigate to http://localhost:3000/123/avatar.png to see an avatar for a given number, by changing "123" to a user ID

To modify a user's avatar, modify the `staticValues.js` file, with their user ID as the left value, and the ID you'd like them to use the avatar of as the right value
