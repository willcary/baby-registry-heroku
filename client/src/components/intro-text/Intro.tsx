import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { checkIfAuth } from '../../assets/js/functions'
import IntroLoggedOut from './IntroLoggedOut'
import IntroLoggedIn from './IntroLoggedIn'

export default function Intro() {
  const { user, isAuthenticated } = useAuth0()
  const [userInfo, setUserInfo] = useState({
    user_id: 0,
    baby_gender: 'mystery',
    address: '',
  })
  const [didUserLoad, setDidUserLoad] = useState(false)

  const getUserInfo = async () => {
    try {
      const response = await fetch(`/user_info/${userInfo.user_id}`)
      const jsonData = await response.json()
      setUserInfo(jsonData)
      setDidUserLoad(true)
    } catch (error: any) {
      setDidUserLoad(false)
      console.error(error.message)
    }
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      <h1 className='mb-3 mt-4'>Emily and Will's Registry</h1>
      {checkIfAuth(user, isAuthenticated) ? (
        <IntroLoggedIn
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          didUserLoad={didUserLoad}
        />
      ) : (
        <IntroLoggedOut userInfo={userInfo} />
      )}
    </>
  )
}
