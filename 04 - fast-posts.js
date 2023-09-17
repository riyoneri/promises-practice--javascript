function getFastPosts() {
  const firstNews = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => resolve([]));
  });

  const secondNews = new Promise((resolve, reject) => {
    fetch("https://this-may-not-exist.com/posts")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => resolve([]));
  });
  const thirdNews = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => resolve([]));
  });

  return Promise.race([firstNews, secondNews, thirdNews]);
}

getFastPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => console.log(err));
