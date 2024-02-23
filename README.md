# Whack-a-Mario
View the live site here

# Table of Contents
1. [UX](#ux)
    * [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Design](#design)
    * [Wireframes](#wireframes)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. Testing
5. Deployment
6. Credits
    * Content
    * Media (Images)
    * Code
    * Acknowledgements

# UX
### Project Goals
Whack-a-Mario is a game designed to give the user a fun, intuitive and interesting game where the time the mario pops up is completely random!

### User Goals
* Easy to understand and play as soon as the user lands on the game site
* Sounds responsive to actions (if they hit a mario)

### User Stories
#### As a first time visitor I want to quickly understand where to find the rules
#### As a first time visitor I want to know where to start the game
* As soon as teh page is loaded the user can easily see the button 'Start Game'
* When hovering above the button it changes background-color to indicate the user can click on it
#### As a first time visitor I want to see what my score is and how much time I have left
* Above the game container the user can see their score and the time they have left.
* The information is updated in real time so the user always sees how they are doing, with score and time left
#### As a returning visitor I want to be able to quickly restart the game when it's over
* There is a pop up that will display the score the user achieved on game over and a button to play again
#### As creator I want to provide the users with a game that is simple to navigate
* When the website loads the users are clearly presented with the name of the game, a game-info area, a game-area and a control-area.
* When hovering above buttons the background color changes to indicate even further that the user can click on them
#### As a administrator I want to provide a design and feedback that is fun and engages with the user
* The game is designed to be "cartoonish" so the user clearly can see that it is a game and not made to be realistic.
* When the game is ended the user are presented with their score and an opportunity to play again

### Design
#### Colors
Based on mario, so I've chosen a mario color pallete from [Pinterest](https://www.pinterest.ie/pin/644366659198278801/). 

<img src='documentation/readme-images/color-scheme.jpg'>

#### Font
* The font used in the project is Electrolize from [Google Fonts](https://www.fonts.google.com). It was chosen because of it's retro/game look and feel.

#### Background Image
* The background image was taken from a free wallpaper download of [Mario Images](https://mrwallpaper.com/wallpapers/download-mario-wallpaper-nggsnupoh0ha4car.html)



#### Audio


#### Wireframes


# Technologies Used
This project was built using HTML, CSS and Javascript.

* Google Fonts
    * Used to style the text
* Gitpod 
    * Gitpod was used by the developer to build the game.
* GitHub
    * GitHub was used to store project code.


# Features
* There will be two buttons located at the top of the page, an About and Play Game.
1. As this game was designed to be on one page it was decided to use an About Button for the user to interact with if they need to understand how to play the game.
2. About Modal Box
* On click, the modal box opens with instructions on how to play. The background darkened to cover the game area. 
* This includes a hover state to let the user know they are hovering over it and it can be pressed.
* The instructions are fun, small and easy to understand. 
* The X to close the modal box changes colour on hover and located on the top right of the box.
3. Play Game Button
* This button is also located at the top of the page, alongside the about button.
* This includes a hover state to let the user know they are hovering over it and it can be pressed.
* This will launch the game into action.
* The button is deactivated during in-game play and reactivated once finished.
4. Timer
* The timer is displayed as Time Left:, it will count down from 30 seconds. 
5. Scoreboard
* The score is displayed at the top of the game area. 
* Successful hits of the super marios will move the score up 1 point. At the end of the game, you will see your final score.

# Features to Add
* I would really like to add levels to this game, increase the difficulty and make it more difficult for the user as they progress.
* It would also be cool to add a changing game container if the user passed a certain level, like if they hit over 20 marios, the game would change and they would need to hit moles, or pokemons, something to keep the user more engaged!
* I would also like to add a scoreboard, created with highscores fromd different players



# Testing
### Automated Testing

# Bugs
* One of the more major bugs I encountered when making this project was trying to change the cursor to a hammer, or mallet when the user brought their mouse over the game container. I tried creating it in JS, CSS, etc. to no avail.
* I had a lot of trouble with getting the mario to slide up and appear behind the pipe. I had to resort to cropping the bottom of the green pipe altogether and making it look like it was in the ground so it looked like the mario was jumping up out of it. I think it still looks ok in the end. 


# Deployment
This project was developed using [Gidpod](https://gitpod.io/), and pushed to [GitHub](https://github.com/).

To deploy Whack-A-Mario to GitHub Pages from its [repo](https://github.com/jaxsonkieran/whack-the-mario.git) these are the steps to take.

1. Log in to GitHub.
2. From the list of repos choose **jaxsonkieran/whack-the-mario**
3. Near the top of the page there will be the menu items, click on **Settings**
4. On the left side of the screen there is another list of items.
5. Scroll down to the second last item which will be **Pages** and select it.
6. Under **Source** click the dropdown menu and select **Master**
7. Once selected the link will appear in a matter of seconds to the live site.

### How to run this project locally

To clone this project:

1. Click this link to the [Whack-a-Mario](https://github.com/jaxsonkieran/whack-the-mario.git) repo.
2. Under the menu items, there is a green button labelled **Code**.
3. Click the **Code** button and under the **Clone** option select the **HTTPS** tab.
4. Copy the clone URL for the repo.
5. In Your IDE open Git
6. Change the current directory to the location you want to clone this repo.
7. Type **git clone** followed by the copied URL.
8. Press Enter and your clone will be created.