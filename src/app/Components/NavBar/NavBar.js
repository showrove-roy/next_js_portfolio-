import Link from "next/link";
import MainBTN from "../MainBTN/MainBTN";

export default function NavBar() {
  return (
    <header className='bg-[hsla(0,0%,100%,.064)] backdrop-blur-md sticky top-0 z-50'>
      <nav className='maxW py-2 flex justify-between items-center'>
        <div className='bg-gray-700 py-2 px-3 rounded-lg'>
          <h1 className='text-xl font-semibold  text-white'>Showrove Roy</h1>
        </div>
        {/*  */}
        <div className=''>
          <div className='flex px-1 py-1 font-medium text-white border border-white rounded-lg cardBG'>
            <Link
              href='/'
              className='hover:bg-emerald-500 text-white flex px-4 py-2 rounded-lg cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <span className='pl-2'>Home</span>
            </Link>
            <Link
              href='/'
              className='hover:bg-emerald-500 text-white flex px-4 py-2 rounded-lg cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23'
                height='23'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
                <path
                  d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <span className='pl-2'>Service</span>
            </Link>
            <Link
              href='/'
              className='hover:bg-emerald-500 text-white flex px-4 py-2 rounded-lg cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23'
                height='23'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
                <path
                  d='M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59ZM8 13h4M8 17h8'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <span className='pl-2'>Portfolio</span>
            </Link>
            <Link
              href='/'
              className='hover:bg-emerald-500 text-white flex px-4 py-2 rounded-lg cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23'
                height='23'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
                <path
                  d='M11.995 16h.009'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
              <span className='pl-2'>About</span>
            </Link>
            <Link
              href='/'
              className='hover:bg-emerald-500 text-white flex px-4 py-2 rounded-lg cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
              </svg>

              <span className='pl-2'>Contact</span>
            </Link>
          </div>
        </div>

        {/*  */}
        <div className=''>
          <a
            href='mailto:showrove200@gmail.com'
            target='_blank'
            rel='noopener noreferrer'>
            <MainBTN>Hire Me</MainBTN>
          </a>
        </div>
      </nav>
    </header>
  );
}
