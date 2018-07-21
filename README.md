## Spotofi React app

### Project information
This app is for fictional company called Spotofi which consume itunes API 'Top 100' songs to render information on the screen. The main requirement is to create clean, readable, maintainable code and render [JSON feed data](https://itunes.apple.com/us/rss/topalbums/limit=100/json) ) to the screen.

### Instruction
- ```git clone``` the project repo
- ```yarn install``` to install all dependencies
- ```yarn start``` to kickstart FE application
- type in data into the form, e.g. 1990, Pop, Mamma Mia - results will update on each keystroke

### Steps completed
- used functional and class React components
- used ***create-react-app** to scaffold application
- used ***node-sass-chokidar*** to transpile Sass to CSS on build, ***watch-css** to transpile while developing
- clean, readble, maintainable code ...I hope ;)
- VCS with Git obviously ;)
- Up to 100 albums are being rendered depending on search query, will pick up the string and find within album description data

### To do / ideas
- sorting results ascending/descending toggle?
- toggle to render a grid of big images (album covers) only
- CSS animations?
- hosting on Heroku?
- Bootstrap/Reactstrap for responsivness

### Screenshot
![Screenshot](public/screenshot.png)