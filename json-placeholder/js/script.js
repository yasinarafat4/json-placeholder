/*
4 steps to add an element into another element

Step-1: get the container where you want to add the new elements
Step-2: create child element
Step-3: set innerText or innerHTML
Step-4: appendChild

*/

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  //Step-1
  for (const post of posts) {
    const postDiv = document.createElement("div"); // Step-2

    postDiv.classList.add("post"); // Adding dynamic class
    postDiv.innerHTML = `
  <h4>User-${post.userId}</h4>
  <h5>Post:${post.title}</h5>
  <p>Post Description: ${post.body}</p>
      `; //step-3
    postContainer.appendChild(postDiv); //Step-4
  }
}
loadPosts();
