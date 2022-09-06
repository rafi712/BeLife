import HeaderImage from '../assets/header-image.png'
import SecurityIcon from '../assets/security-icon.svg'
import GetStartedButton from './GetStartedButton'
import LearnMoreButton from './LearnMoreButton'

const Header = () => {
  return (
    <header className='relative flex items-center gap-28 bg-primaryBlue px-24 pt-28'>
      <img src={HeaderImage} alt='header' className='w-[541px]' />

      <div>
        <div className='flex w-fit items-center gap-2 rounded-lg bg-white/10 px-3 py-4'>
          <img src={SecurityIcon} alt='security' />
          <p className='font-semibold capitalize text-white'>
            trusted insurance!
          </p>
        </div>

        <h1 className='mt-5 text-5xl font-bold capitalize leading-relaxed text-white'>
          prepare everything start now for your family's future
        </h1>

        <p className='mt-5 font-light leading-7 text-[#A4C7FB]'>
          Register as a BeLife member now & get the best offer for your
          insurance benefit package and your family.
        </p>

        <div className='mt-14 flex gap-2'>
          <GetStartedButton />
          <LearnMoreButton />
        </div>
      </div>

      <div className='custom-shadow center absolute bottom-0 m-auto h-[154px] w-4/5 rounded-xl bg-white'></div>
    </header>
  )
}
export default Header
