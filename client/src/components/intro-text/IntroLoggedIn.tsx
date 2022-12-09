import { IntroInfo } from '../../assets/ts/types'

export default function IntroLoggedIn({
  babyGender,
  setBabyGender,
  address,
  setAddress,
}: IntroInfo) {
  return (
    <>
      <p>
        Congratulations on the new member of your family! Add and edit items at
        your leisure.
      </p>
      <form>
        <p>Know the gender of your new little one?</p>
        <div className='w-50 m-auto mb-3'>
          <select
            value={babyGender}
            className='form-select'
            aria-label='Gender options'
          >
            <option value='mystery'>Mystery</option>
            <option value='girl'>Girl</option>
            <option value='boy'>Boy</option>
            <option value='girl-girl'>Two Girls</option>
            <option value='boy-boy'>Two Boys</option>
            <option value='boy-girl'>Boy and Girl</option>
          </select>
        </div>

        <label htmlFor='address' className='form-label'>
          Address to send items to:
        </label>
        <input
          type='text'
          name='address'
          className='form-control w-50 m-auto mb-3'
          placeholder='Address'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          aria-label='Address'
          aria-describedby='Address to ship'
        />
        <input
          type='submit'
          value='Submit changes'
          className='btn btn-primary'
        />
      </form>
    </>
  )
}
