import axios from "axios";

const BASE_URL = "https://dummyjson.com/todos";

export const getAllTodos = async () => {
  return await axios
    .get(BASE_URL)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getSingleTodo = async (id: number) => {
  return await axios
    .get(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getAllTodosByUserId = async (userId: number) => {
  return await axios
    .get(`${BASE_URL}/user/${userId}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

type Todo = {
  title: string;
  completed: boolean;
  userId: number;
};

export const createTodo = async (todo: Todo) => {
  return await axios
    .post(`${BASE_URL}/add`, todo)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const updateTodo = async (
  id: number,
  todo: { todo?: string; completed: boolean }
) => {
  return await axios
    .put(`${BASE_URL}/${id}`, todo)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const deleteTodo = async (id: number) => {
  return await axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
