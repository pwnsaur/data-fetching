import axios from 'axios';

async function getData() {
  const response = await axios('https://dummyjson.com/todos');
  const array = [];
  response.data.todos.forEach((todo) => {
    if (todo.completed) {
      array.push(todo);
    }
  });
  return array;
}

getData();
