import { faker } from "@faker-js/faker";

export const createTasks = () => {
  return {
    userId: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 3, max: 6 }),
    description: faker.lorem.paragraph(),
    date: faker.date.soon({ days: 14 }),
    status: faker.datatype.boolean(),
  };
};

export const tasks = (count: number = Math.floor(Math.random() * 5) + 1) =>
  faker.helpers.multiple(createTasks, {
    count,
  });
