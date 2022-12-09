import { IntroInfo } from '../../assets/ts/types'

export default function IntroLoggedOut({ babyGender, address }: IntroInfo) {
  const determineGenderColor = (babyGender: string) =>
    babyGender === 'girl'
      ? 'text-secondary'
      : babyGender === 'boy'
      ? 'text-primary'
      : ''
  return (
    <>
      <p className='text-start ms-3 ms-md-5 me-3 me-md-5'>
        Welcome to our registry for our{' '}
        <span className={`${determineGenderColor(babyGender)} fw-bold`}>
          baby girl!
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
