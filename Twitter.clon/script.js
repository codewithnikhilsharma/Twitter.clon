// select the form element and add an event listener for submit
const form = document.querySelector('form');
form.addEventListener('submit', addTweet);

// define the addTweet function
function addTweet(e) {
	// prevent the default form submission behavior
	e.preventDefault();

	// get the tweet text from the textarea
	const tweetText = document.getElementById('tweet').value;

	// create a new tweet element and add it to the tweets container
	const tweetContainer = document.querySelector('.tweets');
	const newTweet = document.createElement('div');
	newTweet.classList.add('tweet');
	newTweet.innerHTML = `
		<div class="user-info">
			<img src="avatar.jpg" alt="Avatar">
			<h2>John Doe</h2>
		</div>
		<p class="tweet-text">${tweetText}</p>
		<div class="tweet-actions">
			<button class="btn-reply">Reply</button>
			<button class="btn-retweet">Retweet</button>
			<button class="btn-like">Like</button>
		</div>
	`;
	tweetContainer.prepend(newTweet);

	// clear the textarea
	document.getElementById('tweet').value = '';
}
