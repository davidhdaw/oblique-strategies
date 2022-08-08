# Oblique Strategies
#### A Turing Mod 3 Final Project from [David Daw](https://github.com/davidhdaw) using React and Firebase!

 Oblique Strategies is a lightweight daily writing tool utilizing the prompts and principles of both the Oblique Strategies deck created by Brian Eno and the practice of Morning Pages from Julia Cameron's book the artists way. The goal is to create a place to focus on writing as a practice rather than a matter of output by focusing the user on daily writing goals and de-emphasizing the actual output of their writing.

### How to access the application:
#### Go to this [link](https://oblique-strategies-eight.vercel.app/) where the application is deployed on Vercel

#### Or if you prefer to access the code as well as the application follow these *installation instructions*

- Clone down this repository into your local machine
- `cd` into the root directory of the repo
- Run `npm i` in your console to install the dependencies
- Run `npm start` in the console to start the sever and access the application from your browser

#### Usage 

Once you've logged in to Oblique Strategies you'll be taken to the minimalist text editor for writing your daily log with minimal distraction. The prompts on the right side of the editor, taken from Brian Eno's Oblique Strategies decks, should be considered more suggestions than anything. A way to unstuck yourself if you are lacking in inspiration. Once you've met your daily word count goal you can submit your new entry and you'll be taken to a log of all your writing.

#### Testing Instructions
In your terminal, run `npx cypress open` to see that all user flows have been tested and the app is passing all tests!

#### See it in action 

Logging in  
![Logging In!](/src/assets/Oblique1.gif "log in")  
Using the editor  
![Using the editor!](/src/assets/Oblique2.gif "editor demo")  
Seeing your earlier posts  
![Reviewing submitted writing!](/src/assets/Oblique2.gif "log entries")  

#### Technologies used:
- React
- HTML5 
- CSS3
- React Router
- Firebase
- Local Storage
- Proxy API server deployed on Heroku
- Fetch API
- Cypress E2E testing
- [Figma](https://www.figma.com/file/bFiSE85TYfKcbzoQ9GgctR/Morning-Pges---Oblique-Strategies?node-id=2%3A5)
- [Trello project boards](https://trello.com/b/PG5advSu/oblique-strategies)
- Vercel deployment

##### David Daw Reflection:
While I obviously still have plenty of learning to do with React this project really let me explore what I could do with the Library. Since I was working with a preexisting design by Nicole Thayer I was able to quickly reach MVP and use the rest of my time exploring stretch techs like Firebase. I was surprised how easy it was to set up firebase allowing me to set up complex features like remote authorization and saving entries to a back-end server within just a few hours. I plan to add even more functionality for Oblique Strategies through Firebase soon. This project was, however initially conceived as a front-end mod 3 final project at the [Turing School of Software and Design](https://frontend.turing.edu/) and migrating completely to Firebase would have conflicted with many learning goals around Cypress testing and reading from an external API with React.

##### Planned Future Features
1. Media calls for mobile use.
2. Additional styling on some elements such as login.
3. Pull strategies from firebase rather than from an external api.
3. Settings page with various functionality.
* Alternate 'darkmode' colorscheme.
* Ability to show/hide timer until next strategy is shown.
* Ability to customize the amount of time between strategies.
* A setting to turn off the ability to draw a new strategy by clicking on the current card.
* A setting to customize the amount of words in your daily entry.
* Alternate setting to have your goal be time spent writing rather than a word count.
* Customization options for the log of your daily pages.
