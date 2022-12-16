import { IntroProps } from '../../assets/ts/types'

export default function IntroLoggedOut({ userInfo }: IntroProps) {
  const { baby_gender, address } = userInfo
  console.log(baby_gender)
  const determineGenderColor = (baby_gender: string) => {
    if (baby_gender === 'girl' || baby_gender === 'girl-girl') {
      return 'text-secondary'
    } else if (baby_gender === 'boy' || baby_gender === 'boy-boy') {
      return 'text-primary'
    } else {
      return 'dark-gray'
    }
  }

  const determineGenderWording = (baby_gender: string) => {
    let string = ''
    switch (baby_gender) {
      case 'mystery':
        string = 'baby'
        break
      case 'girl':
        string = 'baby girl'
        break
      case 'boy':
        string = 'baby boy'
        break
      case 'girl-girl':
        string = 'baby girls'
        break
      case 'boy-boy':
        string = 'baby boys'
        break
      case 'girl-boy':
        string = 'baby girl and boy'
        break
    }
    return string
  }

  return (
    <>
      <p className='text-start ms-3 ms-md-5 me-3 me-md-5'>
        Welcome to our registry for our{' '}
        <span className={`${determineGenderColor(baby_gender)} fw-bold`}>
          {determineGenderWording(baby_gender)}!
        </span>{' '}
        We are using this registry app to encourage buying/regifting/thrifting
        used items whenever possible. Please claim an item if you plan to
        purchase it by entering the quantity and your name at the bottom of the
        item, click the "Reserve gift" button at the bottom of the screen, and
        confirm. In addition to this list, we also welcome any used items that
        you are ready to pass on, maternaty/post-partum clothes etc.
      </p>
      <p className='text-start ms-3 ms-md-5 me-3 me-md-5'>
        Send items to:{' '}
        {address.length > 0 ? address : <em>No address provided</em>}
      </p>
    </>
  )
}
