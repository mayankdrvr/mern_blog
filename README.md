# ValueBlog

This is an admin controlled full stack MERN blog web application. Only admin has access to add, update & delete new blog post. Rich text editor feature enables us to edit text & add hyperlinks, images, videos etc. This project was hosted on Heroku with free plan but Heroku no longer supports free full stack web hosting. So, i am currently working on deploying it on some other free full stack web hosting platform. 

UPDATE 10 Feb 2023: The site is live on https://mern-blog-3gnt.onrender.com/
Wait for a few seconds for the site to load. If the site features are not working, keep refreshing the page and clearing the browser cache and trying again. These issues are from https://render.com/ free plan as they were not there when the site was live on Heroku free plan.

Login Name- Your name <br />
Admin Password- projectqwerty

Project Specifications-
- Fully responsive web application.
- Displays all published blog posts on home page with author, date & time of blog post creation.
- Only admin can create/update/delete any blog post with full rich text editor features.
- Users can see all blog posts in chronological order on the home screen.

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
<a href="https://render.com" target="_blank" rel="noreferrer"> <img src="https://upload.vectorlogo.zone/logos/render/images/bb711e6b-3dc7-496f-b665-10558e88ceed.svg" alt="render" width="40" height="40"/> </a>

## Google Lighthouse webpage perfomance report 

The full report can be accessed at 
  
![valueblog](https://user-images.githubusercontent.com/87348490/152341465-c7c99654-58b2-4da9-983a-435329e71771.png)

## New Features to be added in Future

- Send notifications to user email inbox.
- Add more data visualization features.

## Authors

[@mayankdrvr](https://www.github.com/mayankdrvr)

## Run on Local System

- Go to Code->Download ZIP to download the .zip file. Just extract the .zip file and open the extracted folder in VS Code editor.
- Add .env and .gitignore file in client, server and root(main) folders. Add .env and node_modules in all .gitignore files.
- Open a new terminal in VS Code in the root(../../my-career-progress/) folder.
- To install client libraries & dependencies and run the frontend, run the following commands 
```bash
  cd client
  npm install
  npm start
```
Frontend will run on localhost:3000
### Add Environment variables in server folder 
- In .env file of server folder, add the following key value pairs 
```bash
PORT=5000
MONGO_URL=<Your MongoDB connection string>
JWT_LIFETIME=<Your jwt key>
JWT_SECRET=<Your jwt key>
```
- To install server libraries & dependencies and run the backend, run the following commands 
```bash
  cd server
  npm install
  npm start
```
Backend will run on localhost:5000

- Open http://localhost:3000/ to find the project running in your browser.

# Production Setup(Before Deployment)
- Remove node_modules and build folder from client, server and root folders. Do not remove any package-lock.json files.
- In root folder package.json file in "scripts" field, add the following key-value pairs
```bash
 "install-client": "npm install --prefix client"
 "setup-production": "npm run install-client && npm run build-client && npm install"
```
In root folder, run these command one by one in terminal-
```
npm run setup-production
npm server
```
Check localhost:5000 to see the production ready app working on local system

## Deployment on Render

### Deploying server folder
- Download the entire code of this project and create a Github repository and push the entire code in it.
- Create an account on Render and connect your Github account and connect all repositories(recommended) in it. 
- Go to Render dashboard and select New->Web Service. 
- Select the respective repository and click Connect. 
- In the Build & Deploy section, enter the following commands-
```
  Name - <Your desired domain name> 
  Branch - main
  Root Directory - server
  Build Command - npm install
  Start Command - npm start
```
 Click Create Web Service
 - It will take some time to deploy the backend server. 
 - Copy the URL(onrender.com extension) of the deployed backend server. 
 - In the left part of the screen, click on Environment and enter the following details-
```
PORT=<The onrender.com URL you just copied>
MONGO_URL=<Your MongoDB connection string>
JWT_LIFETIME=<Your jwt key>
JWT_SECRET=<Your jwt key>
``` 

- The full stack web app will be fully deployed in less than five minutes time on the given URL.

## License

[MIT](https://choosealicense.com/licenses/mit/)







