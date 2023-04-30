import Link from "next/link";

export default function NavBar() {
  return (
    <div className='bg-[#121212] sticky top-0 p-5 text-white'>
      <Link className='m-2' href='#home'>
        Home
      </Link>
      <Link className='m-2' href='#about'>
        About
      </Link>
      <Link className='m-2' href='#contact'>
        Contact
      </Link>
      <Link className='m-2' href='#footer'>
        Footer
      </Link>
    </div>
  );
}
