# FriendFinder

_Description_

FriendFinder is an app that matches users based on their responses to a 10 question survey. Users are required to enter in a name and a link to their photo. Each question has a rating from 1(stongly disagree) to 5 (strongly agree) that the user can select from. When the form is submitted, the record for an existing user that most closely matches the new user based on question responses is found and returned. Matching is based on the absolute value of the difference between users' responses. Information for all users can be found on the page /api/friends or clicking on the API FriendList link on the home page.

FriendFinder has been deployed to Heroku. You can try it out [here] (https://friend-finder-enkbond.herokuapp.com/).

_Technical Specs_

FriendFinder uses the following technologies:
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Express.js/npm

File Descriptions:

Server.js - server deployment
apiRoute.js - holds API routing and matching logic
htmlRoute.js - holds HTML routing between pages
friends.js - holds array of user info
home.html - home page with button to continue to survey, links to API info, and link to GitHub
survey.html - survey page with logic to handle AJAX calls of user data, modal with user match