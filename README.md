# Hangman-Game
[Hangman Game](https://green64.github.io/Hangman-Game/)

**Object**

The goal of this game is to display empty spaces for the name of a cartoon character, which the player has seven guesses to solve.

***JavaScript used***

I created an array (tried to use array that matched a name with an image but everytime I used it I broke the game). The player's guesses count down or go in the word. If they miss seven letters, the solution is revealed in red. If they win, the solution is revealed in green (and here is where the image would show up).

I look forward to updating this to say the game is working COMPLETELY.

***Update***

I'm a little further down the road -- 6 weeks to be exact -- and with help from my tutor my hangman is working!

I tried all kinds of things, such as pairing my character name and image URL in an array, but I couldn't synch the character with the correctly guessed word. Until I inserted this code:

```        document.getElementById("challengeWord-img").src="assets/images/" + challengeWord + ".png";
```
I resave all my images as .pngs, and voila:
![Working game](/assets/images/working-game.png)
