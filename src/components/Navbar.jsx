import { useState } from 'react'
import BrandIcon from '../assets/brand-icon-nav.svg'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <nav className='fixed top-0 z-50 flex w-full flex-col justify-between bg-white px-4 py-5 lg:flex-row lg:items-center lg:py-6 lg:px-24'>
      <div className='flex justify-between'>
        <img src={BrandIcon} alt='brand-icon' className='no-drag w-24' />

        {/* Menu Button Toggle */}
        {isHidden ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='menu-button'
            onClick={() => setIsHidden(!isHidden)}
            className='block h-6 w-6 cursor-pointer lg:hidden'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        ) : (
          <svg
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24px'
            height='24px'
            onClick={() => setIsHidden(!isHidden)}
            className='block h-6 w-6 cursor-pointer lg:hidden'
          >
            <path d='M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z' />
          </svg>
        )}
      </div>

      {/* Links */}
      <div
        className={`${
          isHidden ? 'hidden ' : ''
        } mt-10 flex flex-col gap-7 lg:mt-0 lg:flex-row`}
      >
        <a href='#' className='font-medium hover:text-primary'>
          Product
        </a>
        <a href='#' className='font-medium hover:text-primary'>
          Service
        </a>
        <a href='#' className='font-medium hover:text-primary'>
          Contact Us
        </a>
        <a href='#' className='font-medium hover:text-primary'>
          About BeLife
        </a>
      </div>

      {/* Button */}
      <button
        className={`${
          isHidden ? 'hidden ' : ''
        } mt-7 rounded-full bg-primary/10 py-3 px-8 text-primary transition hover:bg-primary/20 lg:mt-0`}
      >
        My Account
      </button>
    </nav>
  )
}
export default Navbar
