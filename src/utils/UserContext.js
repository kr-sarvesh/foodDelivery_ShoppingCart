const { createContext } = require('react')

const UserContext = createContext({
  user: {
    userName: 'sarvesh',
    userAge: 20,
  },
})

export default UserContext
