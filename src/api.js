import postData from "./postData.json";

const wait = time => new Promise(
  resolve => setTimeout(() => resolve(), time)
);

function fetchPosts(){
setTimeout(() => {
  return postData.map((post) => {
      const {comments, ...rest} = post;
      console.log(rest);
      return rest;
  });
}, 1000);
}

function fetchCommentsOfPost (id){
setTimeout(() => {
  return postData.find((post) => post.id === id).comments.map((comment) => {
      const  {reactions, ...rest} = comment;
      console.log(rest);
      return rest;
  });
}, 1000);
}

function fetchReactionsOfPost (id){
setTimeout(() => {
  const comments = postData.find((post) => post.id === id).comments;
  console.log(comments[Math.floor(Math.random() * comments.length)].reactions);
  return comments[Math.floor(Math.random() * comments.length)].reactions;
}, 1000);  
}

export {wait, fetchPosts, fetchCommentsOfPost, fetchReactionsOfPost};