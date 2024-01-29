import { getUsers, setUsers } from "./localStorage";
const getId = ((id = 1) => () => id++)();

class User {
  #password = null; // a private property

  // This constructor will be used by the static methods below
  // as a way to protect the password before returning to the caller
  constructor({ id, username, password }) {
    this.id = id;
    this.username = username;
    this.#password = password;
  }

  static create(username, password) {
    let users = getUsers();
    let newUser = { id: getId(), username, password };
    users.push(newUser);
    setUsers(users);
    return new User(newUser);
  }

  static list() {
    let users = getUsers();
    console.log(`stored users: `, users);
    return users.map((user) => new User(user));
  }

  static find(id) {
    const user = getUsers().find((user) => user.id === id);
    return user ? new User(user) : null;
  }

  static findByUsername(username) {
    const user = getUsers().find((user) => user.username === username);
    return user ? new User(user) : null;
  }

  static deleteAll() {
    return setUsers();
  }

  update(username) {
    const users = getUsers()
    const updatedUser = users.find((user) => user.id === this.id);
    updatedUser.username = username;
    setUsers(users);
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword(password) {
    return this.#password === password;
  }
}

setUsers()
const ben = User.create('ben', '123')
// console.log(ben.#password) // error!
const motun = User.create('motun', '456')
const zo = User.create('zo', '789')
console.log(User.list());
ben.update('BEN')
console.log(User.list());
console.log(ben.isValidPassword('123'))
console.log(ben.isValidPassword('456'))
console.log(User.findByUsername('BEN'))
console.log(User.find(2))
User.deleteAll();
console.log(User.list());

export default User;