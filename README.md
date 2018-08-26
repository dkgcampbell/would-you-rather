# Would You Rather Project


## Installation
Install all project dependencies with 
```
npm install
```

## Launch
Start the development server with 
```
npm start
```

The project will open at
```
http://localhost:3000/
```

## What you're getting?
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── manifest.json # DO NOT MODIFY
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # redux actions
    ├── components # React components
    ├── middleware # thunk middleware
    ├── reducers # redux reducers
    ├── utils # utilities, for accessing the mocked data store
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Application flow
You will first be asked to log in as a user.  Simply click on the user you wish to log in as.

Once logged in you will be presented with the dashboard.  At the top are the navigation links, below are the questions.  The default view for the questions is the ones that you have not yet answered.  You can click on the button to show the questions that you have already answered.

Clicking on an unanswered question allows you to then vote on the option you would rather choose.

Clicking on an answered questions shows you the numbers of people who've also voted on each option.

You can add new questions by going to the navigation links then entering your two options and clicking on the Submit button.

You can also go to the leaderboard from the navigation links and you are presented with the ranked list of users by the number of questions they have answered and asked.
