import ButtonArrow from '../assets/button-arrow.svg'

const GetStartedButton = ({ text }) => {
  return (
    <button className='flex gap-[6px] rounded-full bg-primary px-8 py-4 text-white'>
      Get Started Now
      <img src={ButtonArrow} alt='button-arrow' />
    </button>
  )
}
export default GetStartedButton
