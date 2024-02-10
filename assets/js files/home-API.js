async function postTweet() {
    const tweetInput = document.getElementById('userPost').value;

    const response = await fetch('http://localhost:3000/postTweet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Explicitly set content type to JSON
        },
        body: JSON.stringify({ username, tweet: tweetInput }),
    });

    const result = await response.json();

    if (result.success) {
        displayTweet(result.tweet);
        console.log('Tweet posted successfully:', result.tweet);
    } else {
        console.error('Error posting tweet:', result.message);
    }
}

async function loadTweets() {
    const response = await fetch('http://localhost:3000/tweets');
    const data = await response.json();

    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; // Clear existing tweets

    data.tweets.forEach(tweet => {
        displayTweet(tweet);
    });
}

function displayTweet(tweet) {
    const postContainer = document.getElementById('post-container');
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet-container'); // Add a class for styling

    // Format the timestamp
    const timestamp = new Date(tweet.timestamp).toLocaleString();

    tweetElement.innerHTML = `
    <i class="fa fa-user-circle" id="placeholder-user"></i>
    <strong>${tweet.username}</strong><br>
    <small>${timestamp}</small> 
    <p>${tweet.tweet}</p><br>
    <div class="btn-container-tweet">
        <button class="comment-btn" onclick="CommentButtonClick(this)">
        <i class="fa fa-comment"></i><span class="comment-count">0</span>
        </button>
        <button class="retweet-btn" onclick="RetweetButtonClick(this)">
            <i class="fa fa-retweet"></i><span class="retweet-count">0</span>
        </button>
        <button class="like-btn" onclick="LikeButtonClick(this)">
            <i class="fa fa-heart"></i><span class="like-count">0</span>
        </button>
        <button class="share-btn"><i class="fa fa-share"></i></button>
    </div>
    `;

    postContainer.appendChild(tweetElement);
}

setInterval(loadTweets, 5000); // Refresh tweets every 5 seconds: this can be changed instead when page load or refreshed
loadTweets(); // Load tweets on page load
