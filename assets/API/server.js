const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [
  { username: 'homer', password: '123456' },
  { username: 'wilbert', password: '123456' },
  { username: 'michaella', password: '123456' }, // Testing Accounts
  { username: 'noella', password: '123456' },
  { username: 'arvin', password: '123456' }, 
];

let tweets = [
  { username: 'arvin', tweet: 'This is a test tweet!', timestamp: new Date() },
  { username: 'wilbert', tweet: 'Another test tweet here!', timestamp: new Date() }, // Sample Tweets
  { username: 'michaella', tweet: 'Testing 1, 2, 3...', timestamp: new Date() },
];

app.use(cors());
app.use(bodyParser.json());

// Authentication middleware
document.addEventListener('DOMContentLoaded', function () {
  const signInForm = document.getElementById('signInForm');
  const errorMessage = document.getElementById('errorMessage');

  signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    const user = authenticate(username, password);

    if(user) {
      window.location.href = 'home.html';
    } else {
      errorMessage.style.display = 'block';
    }
  });
});

function authenticate(username, password) {
  // Find a user with matching username and password
  const user = users.find(u => u.username === username && u.password === password);
  
  // Return true if user is found (authenticated), otherwise return false (not authenticated)
  return user !== undefined;
}

app.post('/postTweet', (req, res) => {
  const { username, tweet } = req.body;

  // Find the user based on the current logged-in user
  const currentLoggedUser = 'homer'; // Set the current logged-in user
  const user = users.find(u => u.username === currentLoggedUser);

  if (user) {
    const newTweet = { username: currentLoggedUser, tweet, timestamp: new Date() };
    tweets.push(newTweet);
    res.json({ success: true, tweet: newTweet });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/tweets', (req, res) => {
  res.json({ tweets });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
