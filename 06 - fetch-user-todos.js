function fetchUserTodos() {
  const end1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

  const end2 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

  return Promise.all([end1, end2])
    .then((data) => {
      data[0].forEach((user) => {
        user.todo = [...data[1].filter((todo) => todo.userId === user.id)];
      });
      return data[0];
    })
    .catch((err) => console.log(err));
}

fetchUserTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
