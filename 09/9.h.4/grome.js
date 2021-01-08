const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(a => a['name']);

const rooms = {
  room1: [{ name: 'Ann' }, { name: 'Kate' }],
  room2: [{ name: 'Bob' }, { name: 'Tom' }],
  room3: [{ name: 'Nick' }, { name: 'John' }],
};

console.log(getPeople(rooms));

const people = obj =>
  Object.values(obj)
    .reduce((arr, item) => arr.concat(item), [])
    .map(({ name }) => name);

console.log(people(rooms));
