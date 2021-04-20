/*I dont think i figured out the task well enough but i`m sure i could handle it, it would be great if you found some time to explain it so that i could complete it properly :)*/
/*I didnt figure out where i`m supposed to use the onPostSelect, onCommentSelect functions, and the async/await*/
import {wait, fetchPosts, fetchCommentsOfPost, fetchReactionsOfPost} from "./api";
import postData from "./postData.json";

const randomIdSelector = postData[Math.floor(Math.random() * postData.length)].id;

function onLoad(){
    wait(1000)
.then(() => fetchPosts())
.then(() => wait(1000))
.then(() => fetchCommentsOfPost(randomIdSelector))
.then(() => wait(1000))
.then(() => fetchReactionsOfPost(randomIdSelector))
.catch(() => console.error("Oops there was an error"));
}

onLoad();