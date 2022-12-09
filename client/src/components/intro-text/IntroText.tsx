import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { checkIfAuth } from '../../assets/js/functions'
import '../../App.min.css'
import IntroLoggedOut from './IntroLoggedOut'
import IntroLoggedIn from './IntroLoggedIn'

export default function IntroText() {
  const { user, isAuthenticated } = useAuth0()
  const [babyGender, setBabyGender] = useState('girl')
  const [address, setAddress] = useState('')

  return checkIfAuth(user, isAuthenticated) ? (
    <IntroLoggedIn
      babyGender={babyGender}
      setBabyGender={setBabyGender}
      address={address}
      setAddress={setAddress}
    />
  ) : (
    <IntroLoggedOut babyGender={babyGender} address={address} />
  )
}
