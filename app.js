const http = new easyHTTP();

// Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    // console.log(posts);
  }
});

// Get single post
http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
  if (err) {
    console.log(err);
  } else {
    // console.log(post);
  }
});

// Post request
// Create data
const data = {
  title: "Custom post",
  body: "This is a custom  post"
};

// Create Post
http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    // console.log(post);
  }
});

// Update Post
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    // console.log(post);
  }
});

// Delete post
http.del("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
