import stork from '../assets/img/stork.png'

export default function Home() {
  return (
    <>
      <h1 className='text-secondary'>Stork Registries</h1>
      <img src={stork} alt='Stork with package' className='home-img mt-3' />
    </>
  )
}
