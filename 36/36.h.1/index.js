let result = null;

export const parseUser = str => {
  try {
    result = JSON.parse(str);
  } catch {
    result = null;
  } finally {
    return result;
  }
};

const user = '{"name":"Tom","age":"23"}';
console.log(parseUser(user));

const userz = '{"name:"Tom","age":"23"}';
console.log(parseUser(userz));
