import { faker } from "@faker-js/faker";

export function createRandomCandidate() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.firstName(),
    photo: faker.image.people(128, 128, true),
    symbol: {
      title: faker.word.noun(),
      thumbnail: faker.image.animals(64, 64, true),
    },
  };
}
export function createRandomElection() {
  return {
    _id: faker.datatype.uuid(),
    name: faker.lorem.words(),
    conductor: faker.company.name(),
    candidates: Array.from({ length: Math.floor(Math.random() * 3 + 2) }).map(
      createRandomCandidate
    ),
    rules: {},
    date: faker.date.soon(20),
  };
}

export const elections = Array.from({ length: 6 }).map(createRandomElection);
