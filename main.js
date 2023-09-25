const URL = "https://my-json-server.typicode.com/miguelsoffarelli/twitter_replica/posts";
const div = document.querySelector(".tweet");

function fetchData(URL){
    try {
        fetch(URL)
        .then(response => response.json())
        .then(data => showTweets(data))
    } catch (error) {
        console.log(error)
    }
}

function showTweets(data) {
    let htmlContentToAppend = "";
    for (tweet of data) {
        htmlContentToAppend += `
        <div class="post">
            <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${data.indexOf(tweet)}.jpg" style="width: 45px"/></div>
            <div class="content">
                <div class="names">
                <p class="full-name">${tweet.name}</p>
                <p class="user-name">@${generateUsername(tweet.name)}</p>
                <p class="time"> 27mins</p>
                </div>
            </div>
            <div class="tweet-content">
                <p>${tweet.text}</p>
            </div>
            <div class="tweet-icons">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
            </div>
        </div>
        `

    }
    div.innerHTML = htmlContentToAppend;
}

function generateUsername(name){
    return (name.trim().replaceAll(/\s+/g, "_")).toLowerCase();
};

window.addEventListener('load', fetchData(URL));