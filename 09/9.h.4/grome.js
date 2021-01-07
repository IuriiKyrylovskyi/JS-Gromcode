const getPeople = obj => Object.entries(obj);

const rooms = {
  room1: [{ name: 'Ann' }, { name: 'Kate' }],
  room2: [{ name: 'Bob' }, { name: 'Tom' }],
  room3: [{ name: 'Nick' }, { name: 'John' }],
};

console.log(getPeople(rooms));
