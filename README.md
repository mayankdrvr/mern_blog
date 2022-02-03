# ValueBlog

This is a full stack MERN blog web application. Only admin has access to add, update & delete new blog post. Rich text editor feature eanbles us to edit text & add hyperlinks, images, videos etc. This project is hosted live on https://mern-valueblog.herokuapp.com/

Project Specifications-
- Fully responsive web application.
- Displays all published blog posts on home page with author, date & time of blog post creation.
- Admin can create/update/delete any blog post with full rich text editor features.
- Login screen with username=<Choose any username> and password=qwerty

# Demo

  ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/87348490/152381000-5f57b062-377c-48e2-acbc-ec0778422159.gif)

## Technologies Used

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://i.ibb.co/ckPHbQm/express-facebook-share.png" alt="express" width="60" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
<a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>
<a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> 

## Google Lighthouse webpage perfomance report 

The full report can be accessed at https://drive.google.com/file/d/1FjAHQKGxpaWNOnO-fvSuU2OLNjnIS3re/view?usp=sharing
  
![valueblog](https://user-images.githubusercontent.com/87348490/152341465-c7c99654-58b2-4da9-983a-435329e71771.png)

## Lessons Learned

- 

## Known Issues

- Rich Text Editor has text color & text background color feature working but the color palette is showing a single color throughout the palette. This is due to CSS color properties set in the root class which has taken precedence over the local properties.

## New Features to be added in Future

- 

## Authors

[@mayankdrvr](https://www.github.com/mayankdrvr)

## Run on Local System

- Go to Code->Download ZIP to download the .zip file. Just extract the .zip file and open the extracted folder in VS Code editor.
- Open a new terminal in VS Code in the root(../../mern-blog-main/) folder.
- To install client libraries & dependencies and run the frontend, run the following commands 
```bash
  cd client
  npm install
  npm start
```
- To install server libraries & dependencies and run the backend, run the following commands 
```bash
  cd server
  npm install
  npm start
```
- Open http://localhost:3000/ to find the project running in your browser.

## Deployment on Heroku

- 

## License

[MIT](https://choosealicense.com/licenses/mit/)







