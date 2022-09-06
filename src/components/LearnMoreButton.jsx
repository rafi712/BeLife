import DoubleArrow from '../assets/double-arrow-icon.svg'

const LearnMoreButton = () => {
  return (
    <button className='flex rounded-full px-8 py-4 font-medium text-white transition hover:bg-white/10'>
      Learn More
      <img src={DoubleArrow} alt='double-arrow' />
    </button>
  )
}
export default LearnMoreButton
