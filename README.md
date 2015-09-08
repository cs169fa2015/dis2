Dicussion Week 2
---

Welcome back to the second week of discussions!

This week we'll be working on adding Javascript/jQuery to make our music widget a bit more exciting and actually play music. The goal of this week's lab is to hopefully make Javascript/jQuery a language that you're more comfortable with because many of the projects will be using it to make their pages interactive.

If you're stuck at any point, feel free to ask your GSI, or consult these resources:

Something from Mozilla

jQuery document

Stackoverflow

Tools
---

Another set of very useful tools are the console.log functions and the console debuggers.

To use the console.log function, just insert it anywhere in your code, like so:

``` javascript
>>> var hello = 5;
>>> console.log(hello);
5
```

To use the debugger, merely insert the debugger anywhere in your code, like so:

``` javascript
var hello = 5;
debugger;
```

Don't forget to refresh to see your change!

Lets get started!
---

To start, we need to clone this repo. Start by typing:

```
git clone https://github.com/cs169fa2015/dis2
cd dis2
```

If you open index.html in the browser, you'll see that the widget has gotten a bit of an upgrade! We've used a submission from the DevWars website and taken the styling so that you don't have to worry about it. You can check out index.css if you're interested as to how this submission styled the widget.

We'll only be working with index.js.

The Code
---

We've provided you with method signatures that might come in handy to implement when doing some of these features. Feel free to ignore them or write your own if you think there's a better way to do it! Remember, there are many ways to do interactivity when it comes to javascript, so there's many right answers.

Lets go over some of the code in this lab.

The code

``` javascript
$(document).ready(function() { onLoad() });
```

runs the `onLoad()` function as soon as the document is finished loaded. The `ready` method is important because we are never sure when the entire HTML document is rendered, so if we run the javascript code too early some of the elements on the page might not even exist yet (which would lead to a lot of problems if you were to, say, change the text of some nonexistent title).

Most of your work will be in the onLoad() method, where we've started some things for you. We'll be working primarily with the HTML audio element, which you can find more about here _______.

To save time:

`track.duration` gets the length of the entire song, in seconds.

`track.played.end(0)` gets how long the song has played so far (in our case).

Part 1
---

For this first part, we'll be implementing the main part of the music player - actually playing music! We've included a few helper functions that you can use to help you with this. Specifically, when we click on the play button, the music player should start playing music, as well as toggle the button so that it shows the pause button.

A quick hint: The css class 'active' in index.css defines the styling to show the pause button.

Part 2
---

Now that our music widget actually plays music, we want to be able to track the progress of the music as it plays! Right now our music widget displays the time '00:00' no matter where in the song we are. Let's make it so that when the song plays, the time updates correctly. We also want the ending timer to display the time left in the song (currently it displays 00:00).

A quick hint: Start by implementing `getTimePlayed()` and `getTimeLeft()`.

Part 3
---

We want to update the progress bar (the div with class 'tracker'), so that the width of the bar matches the percentage of the song that has already been played.

A quick hint: Start by implementing the `getPercentPlayed()` methods.

Part 4
---

Finally, a working music player....almost. After the song finishes, we want to reset the player so the entire widget can be played again!

Implement the `reset()` method so that it:

- Resets the values of `.time-current` and `.time-left` to their original values.
- Resets the audio
- Resets the progress bar

A quick hint: `track.currentTime = 0` resets the audio.

That's all! Your music player should now be able to play music and update its timer/progress bar. Great job!

