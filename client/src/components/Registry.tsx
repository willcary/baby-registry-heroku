import Container from 'react-bootstrap/Container'
import Intro from './intro-text/Intro'
import RegistryItems from './registry-items/RegistryItems'

export default function Registry() {
  return (
    <Container>
      <Intro />
      <RegistryItems />
    </Container>
  )
}
