document.addEventListener('DOMContentLoaded', function () {
  const userPostTextarea = document.getElementById('userPost');

  userPostTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  // Trigger the input event to set initial height
  userPostTextarea.dispatchEvent(new Event('input'));
});

// Function to handle comment button clicks 
function CommentButtonClick(buttonElement) {
  const countElement = buttonElement.querySelector('.comment-count');
  let count = parseInt(countElement.textContent);

  // Toggle count 
  count += (buttonElement.clicked ? -1 : 1);
  buttonElement.clicked = !buttonElement.clicked;

  updateCount(countElement, count);
}

// Function to handle retweet button clicks 
function RetweetButtonClick(buttonElement) {
  const countElement = buttonElement.querySelector('.retweet-count');
  let count = parseInt(countElement.textContent);

  // Toggle count
  count += (buttonElement.clicked ? -1 : 1);
  buttonElement.clicked = !buttonElement.clicked;

  updateCount(countElement, count);
}

// Function to handle like button clicks 
function LikeButtonClick(buttonElement) {
  const countElement = buttonElement.querySelector('.like-count');
  let count = parseInt(countElement.textContent);

  // Toggle count 
  count += (buttonElement.clicked ? -1 : 1);
  buttonElement.clicked = !buttonElement.clicked;

  updateCount(countElement, count);
}

function updateCount(element, count) {
  element.textContent = count;
}

function enablePostButton() {
  var postButton = document.getElementById('post');
  postButton.disabled = false;
}


function checkInput() {
  var userInput = document.getElementById('userPost').value.trim();
  var postButton = document.getElementById('post');
  if (userInput.length > 0) {
      postButton.disabled = false;
  } else {
      postButton.disabled = true;
  }
}