export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user: {
      ...user
    }
  }
}

export const unSelectUser = () => {
  return {
    type: 'DESELECT_USER'
  }
}

export const updateUser = (e, id) => {
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
