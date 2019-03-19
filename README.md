# Project 3 - Simple D3 Client Conversion Project

A React based authentication and (Utility base) dashboard solution built upon the MERN stack

# What is this Nano-IO Conversion Project anyway?

The purpose of this project is to demonstrate the ability convert a classic .NET utility dashboard to a full stack MERN (or MEAN) product. The candidate dashboard (which will remain nameless..) was developed in .NET over 7 years leveraging and MVC approach. The framework is static, and applications (or "cards") were added over time to extend the portals capabilities and scope of data presented. Each application took 3 to 6 month to develop as there were major challenges connecting and presenting multiple disperate sources at the same time. Moreover multiple versions of the portal was created to support PC, mobile, and smart devices.

![Before MERN](https://imagizer.imageshack.com/img924/8485/JQTENe.jpg)

One of the major advantages of developing in MERN is the ability to incorporate out of the box webparts (i.e. JQuery, D3, Keen..etc) to display data and provide user interaction almost out of the box. In this project, a number of applications found in the candidate portal were emulated. The result was the creation an extremely light weight WIP, and self contained version of the candidate portal that not only works natively in the browser but also across all smart and mobile devices.

To put things in perspective the creation of this demo portal took approximately <b><u>1 week</u></b> vs. the 8+ months it would have taken in the candidates portal development environment.

![Post Mern](https://imagizer.imageshack.com/img921/2897/Advtjt.jpg)

# Dashboard Visual User Guide 101

![Registration and Authentication Page](https://imagizer.imageshack.com/img923/6410/i9KQm0.gif)

- Browse to https://nano-dashboard.herokuapp.com/
- Select Register
- Supply user/pass, save
- Authenticate with user/pass provided
- Optional: Update personal information and password
- Select desired dashboard to view

# Project Summary

This project is dessiminated into two core components

- Custom React Based Authentication 
- Static Dashboard leveraging D3 and similar BI Jquery data driven web components

## Screen Shots & Usage

After signing up the user can access the mapped and routed page. Authentication also works for API endpoints

### User Login and Registration Form

This is an advanced react based authentication module that incorporates hash key generation to authenticate users to the site or API end points. 

![Login Page](https://imagizer.imageshack.com/img924/1414/a2rsVs.jpg)

- Users are greeted with "corporate" welcome page. 
- Typically contains welcome and usage legal stuff
- User can either login or create a new account
- Validations are in place to prevent typos and other fat finger traps

### Authentication

![Authentication](https://imagizer.imageshack.com/img921/1005/XQQmNJ.jpg)

- Users need only provide user and passwords
- Passwords are hash and "salted" for added security
- Sorry, no password recovery presently

### Landing Page to Authorized Pages. 

Note: Static Dashboard pages are kept in docs folder which is inaccessible unless user is authenticated.

![Auth Pages](https://imagizer.imageshack.com/img924/6140/phkftj.jpg)

- Successful logins are greeted with server and API status!
- Users at this point can either update their personal information or proceed to dashboards
- Selecting "Access Dashboard" option will redirect to dash board.
- Note: dashboard static content is located in the /doc route and can only be accessed via a successful login token. Just like an authentic web server 

### Persisted user data in MongoDB

![Persisted Data](https://imagizer.imageshack.com/img924/4860/IlUW1o.jpg)

The following artifacts are persisted in MongoDB

- User Credentials including Password and Private Data
- Future: Visible applications (or cards), their "favored" position

### Nano-IO Dashboard

![Main Dashboard](https://imagizer.imageshack.com/img922/7120/GDi3lc.jpg)

- Users can choose from a selection of data templates
- note: data templates are very easy to create requiring either a manual or automated copy and paste with rename, selection of web parts, and API redirects/configuration.
- Persisting modular deploy was key for the success of this project. 
- Scalable landing page displaying available dashboards
- Future: Users will be able to define custom dashboards with available cards (or applications).

### Sample Dashboard

![Sample Dashboard](https://imagizer.imageshack.com/img921/2808/8KhKX4.jpg)

- Custom Dashboard powered by a number of API's from Google. Sample data is masked for this particular demo. Any API can be leveraged to populate the web-part (i.e. line, bar, pie chart) with meaningfull data.
- Dashboards may contain interactive maps (with pins!) selecting range around pin will add or substract data. Very useful for crowd or rollup calculations!

## Downloading the Project
``` 
Launch Terminal

$ git clone https://github.com/renovatio4ever/project-3.git
$ cd to client
$ npm i
$ cd to server
$ npm i

```

## Launching Project

```
Launch Terminal
$ cd server
$ npm run dev
server side will run on port 8000

Launch (Unique) Terminal
$ cd client
$ npm run dev
client side will run on port 3000

Optional (Local Dev Only)
Launch (Unique) Terminal
$ cd client
$ npm start
contents in /doc will be executed in a local servlette running on port 5000

```

## Project Structure

```
└───project-3
    ├───assets
    │   ├───css
    │   ├───img
    │   └───js
    ├───client
    │   ├───src
    │   │   ├───actions
    │   │   ├───components
    │   │   │   └───auth
    │   │   └───reducers
    │   ├───style
    │   └───test
    │       └───components
    ├───dashboards
    │   ├───asset-perf
    │   ├───fleet-view
    │   ├───future-view
    │   ├───load-metrics
    │   ├───power-dist
    │   ├───service-coverage
    │   └───total-outages
    ├───docs
    │   ├───js
    │   └───styles
    └───server
        └───src
            ├───controllers
            ├───models
            ├───routes
            └───services
```

## Prerequisites

The following web components and artifacts are needed to execute this project

- [Heroku](https://nano-io.herokuapp.com/)
- [MongoDB](https://nano-io.mongodb)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)
- [react](https://www.npmjs.com/package/react)
- [axios](https://www.npmjs.com/package/axios)
- [lodash](https://www.npmjs.com/package/lodash)

Note: package.json maintains additional classical dependencies for the authentication piece.

## [Heroku](https://nano-dashboard.herokuapp.com/) Deployment Steps

```
terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create nano-dashboard
$ npm run heroku:add <your-specific-app>
$ npm run deploy:heroku

note: you will want to configure mongoDB in advance of deploying to heroku. user pass cred can be declared optionally in a .env file for added security

```

## Dependencies (Entire Project: Server, Client and Dashboard)

Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
redux-form: ^6.4.1 |
redux-thunk: ^2.1.0 |

# Author
[Peter Santiago](https://github.com/renovatio4ever)

# License
[MIT](https://github.com/renovatio4ever/LICENSE)

# Road Map

- Reactify Dashboard
- Personalize Session (Dashboard Greeter, Status)
- Extend ability to position and save favorite dashboard layout
- Extend Library of addition D3 components.