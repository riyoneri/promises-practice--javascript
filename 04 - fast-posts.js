function getFastPosts() {
  const firstNews = fetch("https://dummyjson.com/posts");
  const secondNews = fetch("https://this-may-not-exist.com/posts");
  const thirdNews = fetch("https://jsonplaceholder.typicode.com/posts");

  return Promise.any([firstNews, secondNews, thirdNews]);
}

getFastPosts()
  .then((posts) => posts.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
