
window.onload = () => {
    loadUserData();
    loadTweets();
}

goToProfilePage = () => {
    document.getElementById('profileContainer').classList.remove('hidden');
    document.getElementById('tweetWrapper').classList.add('hidden');
}

goToHomePage = () => {
    document.getElementById('tweetWrapper').classList.remove('hidden');
    document.getElementById('profileContainer').classList.add('hidden');
}

loadUserData = () => {
    fetch('./data/userData.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#profileContainer .cover-image').style.backgroundImage = `url(${data.coverImagePath})`;
        document.querySelector('#profileContainer .profile-image').style.backgroundImage = `url(${data.coverImagePath})`;
        document.querySelector('#profileContainer .about-me').innerHTML = data.aboutMe;
    })
    .catch(err => console.error(err));
}

loadTweets = () => {
    fetch('./data/tweets.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            debugger;
            addTweetItem(item.userName,item.description);
        }); 
    })
    .catch(err => console.error(err));
}

addTweetItem = (userName, content) => {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.querySelector(".name").innerHTML = userName;
    clon.querySelector(".content").innerHTML = content;
    document.getElementById("newsFeed").appendChild(clon);    
}