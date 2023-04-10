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


///////// T2 /////////


// #1. Total number of comments
fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => {
        console.log(comments.length);
      });

// // #2. Total number of photos
fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((photos) => {
        console.log(photos.length);
      });

// // #3. Show name, email for each user
fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users.forEach(user => {
            console.log("Name:", user.name + "," , "Email:", user.email);
        });
      });

// // #4. Show name, city for each user
fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users.forEach(user => {
            console.log("Name:", user.name + "," , "City:", user.address.city);
        });
      });

// // #5. How many completed todos?
fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos.length);
      });

// // #6. Title, ID of each completed todo
fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
      .then((response) => response.json())
      .then((todos) => {
        todos.forEach(todo => {
            console.log("Title:", todo.title + "," , "ID:", todo.id);
        });
      });

// // #7. Show username of each incomplete todo
fetch('https://jsonplaceholder.typicode.com/todos?completed=false')
      .then((response) => response.json())
      .then((todos) => {
        todos.forEach(todo => {
            fetch(`https://jsonplaceholder.typicode.com/users?id=${todo.userId}`)
            .then((response) => response.json())
            .then((users) => {
                console.log("Incomplete Todo:", todo.id + ",", "User:" , users[0].name);
            });
        });
      });

// #8. Who owns 'quidem molestiae enim' album?
fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((albums) => {
        albums.forEach(album => {
            if (album.title == 'quidem molestiae enim'){
                fetch(`https://jsonplaceholder.typicode.com/users?id=${album.userId}`)
                .then((response) => response.json())
                .then((users) => {
                    console.log("User:" , users[0].name);
                });
            }
        });
      });