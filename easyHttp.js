function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Get
// Make an http get request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Post
// Make an http Post request

// Put
// Make an http Put request

// Delete
// Make an http Delete request
