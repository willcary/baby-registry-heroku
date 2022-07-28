import { useAuth0 } from '@auth0/auth0-react'
import { Container } from 'react-bootstrap'

const BabyShower = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <Container>
      <h1 className='mb-3 mt-4'>Baby Shower Info!</h1>
      <h2 className='text-secondary'>When:</h2>
      <p>August 13th, 2022</p>
      <h2 className='text-secondary'>Where:</h2>
      <p>996 S Columbus Rd, Wooster, OH 44691</p>
      <h2 className='text-secondary'>Event Info:</h2>
      <p>
        Weather permitting, most of this gathering should take place outdoors
        and be a fun, informal celebration of numerous babies being born come
        September.
      </p>
      {isAuthenticated ? (
        <p className='fs-4 mt-5'>
          Welcome {user?.username ? user?.username : user?.email}
        </p>
      ) : (
        <p className='fs-4 mt-5'>
          Please login to edit your baby shower information!
        </p>
      )}
    </Container>
  )
}

export default BabyShower
