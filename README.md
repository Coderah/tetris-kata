## The Idea
http://en.wikipedia.org/wiki/Kata

Musicians practice. Sports players practice. Doctors practice. Artists practice. Martial Artists practice.

Coders rarely practice on a regular basis, I can always be more efficient and that is the idea behind these
"kata" projects I plan on doing a few times a month. 

The first kata I decided to do is to create a Tetris game class that can run on both the backend and the
frontend. By the end of this project I hope to have a near-perfect implementation, that I can use to create a
clone of Tetris Friends (http://tetrisfriends.com/) in HTML5, avoiding the slow-down and platform limitations
of flash.

## Self Inflicted Rules
The master branch will contain the initial setup and dependencies. 

Each new branch must complete a set of goals, and those goals must be proven to be completed through tests
written within the duration of the kata.

Time will be taken in between each kata to ensure my brain doesn't decide to just duplicate the code from the
previous kata, which would completely destroy the idea behind it, to improve.

After the first kata (or two) I will attempt to set a time goal for myself, not limiting myself to it, due to
the normal craziness of having a job and life. For every kata I will track the time I spend on it.

## Set Of Goals
Pretty typical Tetris stuff here.

- [ ] The current piece can be moved around the screen.
- [ ] A random piece is queued.
- [ ] After a piece is placed the queued one will start from the top.
- [ ] When the current piece touches something else it will be placed within a time-limit, to allow sliding.
- [ ] The current piece is rotatable.
- [ ] The current piece drops slowly over time.

After all of these goals are proven through tests I will need to render it:

- [ ] All of this must be implemented without putting the render code inside the class itself (events?).
- [ ] Render the board and current piece.
- [ ] Render the queued piece.
- [ ] Allow some form of input to move the current piece on the screen.