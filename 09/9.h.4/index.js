const getPeople = obj =>
  Object.values(obj)
    .flatMap(a => Object.values(a))
    .flatMap(a => Object.values(a));

const rooms = {
  room1: [{ name: 'Ann' }, { name: 'Kate' }],
  room2: [{ name: 'Bob' }, { name: 'Tom' }],
  room3: [{ name: 'Nick' }, { name: 'John' }],
};

const emptyRooms = {};
console.log(getPeople(rooms));
console.log('emptyRooms: ', getPeople(emptyRooms));
