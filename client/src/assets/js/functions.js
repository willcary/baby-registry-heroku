import { loginEmail1, loginEmail2 } from './constants'

//Check is user is authenticated and the registry owner
export const checkIfAuth = (user, isAuthenticated) => {
  return (
    (isAuthenticated && user?.email === loginEmail1) ||
    user?.email === loginEmail2
  )
}
