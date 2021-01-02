const sortContacts = (contacts, descSort = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const sortedArr = [...contacts];
  if (!descSort) {
    sortedArr.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    sortedArr.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sortedArr;
};

const info = [
  { name: 'Tom', phoneNumber: '888-77-77' },
  { name: 'Ann', phoneNumber: '111-77-77' },
  { name: 'Bob', phoneNumber: '222-77-77' },
  { name: 'Fill', phoneNumber: '333-77-77' },
  { name: 'Martha', phoneNumber: '777-77-77' },
  { name: 'Joly', phoneNumber: '555-77-77' },
  { name: 'Ivan', phoneNumber: '444-77-77' },
];

const info2 = 5;

console.log(sortContacts(info, true));
console.log(sortContacts(info, false));
console.log(sortContacts(info2, true));
