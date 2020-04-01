
class TweetAPI {
    static getTweets = () => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = localStorage.getItem('tweets');
                localStorage.setItem('test',JS.stringify)
                resolve(JSON.parse(tweetsData));
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static addTweet = (tweetData) => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = JSON.parse(localStorage.getItem('tweets'));
                localStorage.setItem('tweets',JSON.stringify(tweetsData !== null ? 
                                                [...tweetsData,{id: tweetsData.length, ...tweetData}] : [{id: 0, ...tweetData}]));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static likeTweet = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                let tweetsData = JSON.parse(localStorage.getItem('tweets'));
                tweetsData.map(item =>{
                    if (item.id === parseInt(tweetId)){
                        item.like = true;
                    }
                })
                localStorage.setItem('tweets',JSON.stringify(tweetsData));
                resolve('success');
            }
            catch (err) {
                reject(err);
            }
        })
    }
}