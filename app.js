// T1 Q1 + Q2
fetch("https://api.github.com/users/bcariani")
    .then(response => response.json())
    .then((json) => {
        console.log("bcariani has " + json.public_repos + " public repositories")
        console.log("bcariani has " + json.followers + " followers")
    });

// T1 Q3
fetch("https://api.github.com/users/bcariani/followers")
    .then(response => response.json())
    .then((json) => {
        json.forEach((user) => {
            console.log(user.login)
        })
    });

// T2 Q1
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then((comments) => {
        console.log(comments.length)
    });

// T2 Q2
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then((photos) => {
        console.log(photos.length)
    });

// T2 Q3
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => {
        users.forEach((user) => {
            console.log("Name: " + user.name + " Email:" + user.email)
        })
    });
