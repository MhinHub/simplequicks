import axios from "axios";

const url = "https://reqres.in/api/users";

export const getUsers = async ({
  page = 1,
  per_page = 6,
}: {
  page?: number;
  per_page?: number;
}) => {
  return await axios
    .get(url, {
      params: {
        page,
        per_page,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getUser = async (id: number) => {
  return await axios
    .get(`${url}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
