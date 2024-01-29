export const getItems = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const setItems = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

export const getUsers = () => getItems('users') || [];
export const setUsers = (users = []) => setItems('users', users)