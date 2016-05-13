export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    id: Math.random().toString(36).substr(2, 9),
    ...user
  }
}

export const deselectUser = () => {
  return {
    type: 'DESELECT_USER'
  }
}

export const updateUser = (e, id) => {
  console.log('action', id);
  return {
    type: 'UPDATE_USER',
    id: id,
    field: e.target.id,
    value: e.target.value
  }
}

export const selectUser = (id) => {
  return {
    type: 'SELECT_USER',
    id: id
  }
}
