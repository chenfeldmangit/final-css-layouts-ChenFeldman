this.user = {
    coverImagePath: "https://pbs.twimg.com/profile_banners/1018006119468421120/1560693180/1500x500",
    profileImagePath: "https://pbs.twimg.com/profile_banners/1018006119468421120/1560693180/1500x500",
    aboutMe: "Born and raised here so I am part of twitter and will always be"
};

this.tweets = [
    {name:"dasda"},
    {name:"dasda"},
    {name:"dasda"}
]

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
    /* fetch('./data/userData.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#profileContainer .cover-image').style.backgroundImage = `url(${data.coverImagePath})`;
        document.querySelector('#profileContainer .profile-image').style.backgroundImage = `url(${data.coverImagePath})`;
        document.querySelector('#profileContainer .about-me').innerHTML = data.aboutMe;
    })
    .catch(err => console.error(err)); */

    document.querySelector('#profileContainer .cover-image').style.backgroundImage = `url(${this.user.coverImagePath})`;
    document.querySelector('#profileContainer .profile-image').style.backgroundImage = `url(${this.user.coverImagePath})`;
    document.querySelector('#profileContainer .about-me').innerHTML = this.user.aboutMe;
}

loadTweets = () => {
    fetch('./data/tweets.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
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

openProfileForm = () => {
    document.getElementById("overlay").style.display = "flex";
}

closeProfileForm = (event) => {
    if (event.target.id === "overlay" || event.target.id === "saveUserData"){
        document.getElementById("overlay").style.display = "none";
    }
}

saveUserData = () => {
    let userName = document.querySelector("#userName").value;
    let userDescription = document.querySelector("#userDescription").value;

    // Sample of updating one field. Students will update more than one.
    this.user.aboutMe = userDescription;
    
    loadUserData();
    closeProfileForm();
}

// Bonus for the form exercise. Can also use onkeypress
checkLimit = (charLimit) => {
        
}